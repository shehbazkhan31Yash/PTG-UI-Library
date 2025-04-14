import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { ExportToCsv } from 'export-to-csv';
import { PtgUiButton } from '../button/button';
import { PtgUiDownloadFileProps } from '@ptg-react-libs/interfaces';

/**
 * PtgUiDownload component to provide functionality for downloading data in various formats.
 *
 * This component supports downloading data as Excel, PDF, JPG, or Word files. It allows users
 * to select the desired file type from a dropdown and download the content rendered inside
 * the component.
 *
 * @param {PtgUiDownloadFileProps} props - The properties for the PtgUiDownload component.
 * @param {Array<string>} [props.excelColumns=[]] - The column headers for the Excel file.
 * @param {Array<any>} [props.excelDataToDownload=[]] - The data to be downloaded in the Excel file.
 * @param {Array<string>} [props.allowFileTypes=['PDF', 'EXCEL', 'JPG', 'WORD']] - The allowed file types for download.
 * @param {React.ReactNode} props.children - The content to render inside the component and download.
 * @param {string} [props.downloadBtnText='Download'] - The text for the download button.
 * @param {string} [props.downloadFileName='example'] - The name of the downloaded file (without extension).
 * @returns {JSX.Element} The rendered PtgUiDownload component.
 */
export const PtgUiDownload: React.FC<PtgUiDownloadFileProps> = ({
	excelColumns = [],
	excelDataToDownload = [],
	allowFileTypes = ['PDF', 'EXCEL', 'JPG', 'WORD'],
	children,
	downloadBtnText = 'Download',
	downloadFileName = 'example',
}) => {
	const [selectedType, setSelectedType] = useState<string>(''); // Renamed for clarity
	const tableRef = useRef<HTMLDivElement>(null); // Use useRef for table reference

	// Create options for the select dropdown
	const newAllowTypes = allowFileTypes.map((item) => ({
		label: item,
		value: item,
	}));

	// Handle file type selection
	const onSelectHandle = (fileType: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedType(fileType.target.value.toUpperCase());
	};

	// Download function based on selected type
	const download = () => {
		switch (selectedType) {
			case 'EXCEL':
				downloadExcel(excelDataToDownload);
				break;
			case 'JPG':
			case 'JPEG':
				downloadImage();
				break;
			case 'WORD':
				downloadWordFile();
				break;
			case 'PDF':
				downloadPdfFile();
				break;
			default:
				break;
		}
	};

	// Download Excel file
	const downloadExcel = (data: any) => {
		const options = {
			headers: excelColumns,
			fieldSeparator: ',',
			quoteStrings: '"',
			decimalSeparator: '.',
			useTextFile: false,
			useBom: true,
			filename: `${downloadFileName}.csv`,
			useKeysAsHeaders: true,
		};
		const csvExporter = new ExportToCsv(options);
		// Combine headers with data for export
		csvExporter.generateCsv(data);
	};

	// Generate a Blob for the Word file
	const generateBlob = (data: string, type: string) => new Blob([data], { type });

	// Create and download the Word file
	const downloadWordFile = () => {
		const blob = generateBlob(createTable(), 'application/msword');
		downloadBlob(blob, `${downloadFileName}.doc`);
	};

	// Create HTML table from the ref
	const createTable = () => {
		return tableRef.current?.outerHTML ?? ''; // Optional chaining for safety
	};

	// Download the Blob
	const downloadBlob = (blob: Blob, fileName: string) => {
		const element = document.createElement('a');
		element.href = URL.createObjectURL(blob);
		element.download = fileName;
		element.click();
	};

	// Download image as JPG
	const downloadImage = async () => {
		const element = tableRef.current;
		if (element) {
			const canvas = await html2canvas(element);
			const data = canvas.toDataURL('image/jpg');
			const link = document.createElement('a');
			link.href = data;
			link.download = `${downloadFileName}.jpg`;
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		}
	};

	// Download PDF file
	const downloadPdfFile = async () => {
		const element = tableRef.current;
		if (element) {
			const canvas = await html2canvas(element);
			const data = canvas.toDataURL('image/png');
			const fileWidth = 208;
			const fileHeight = (canvas.height * fileWidth) / canvas.width;
			const PDF = new jsPDF('p', 'mm', 'a4');
			PDF.addImage(data, 'PNG', 0, 0, fileWidth, fileHeight);
			PDF.save(`${downloadFileName}.pdf`);
		}
	};

	return (
		<div className="container">
			<div className="row">
				<div className="col-12">
					<div className="d-flex mb-3 justify-content-md-end">
						<div className="w-25">
							<select
								className="form-select"
								aria-label="Default select example"
								onChange={onSelectHandle}
								value={selectedType}
							>
								<option value="">Select</option>
								{newAllowTypes.map((item, index) => (
									<option key={index} value={item.value}>
										{item.label}
									</option>
								))}
							</select>
						</div>
						<div className="ms-2 mr-7">
							<PtgUiButton
								text={downloadBtnText}
								textColor="#fff"
								backgroundColor="#052982"
								onClick={download}
								width="110px"
								fontSize="14px"
								disabled={selectedType === ''} // Simplified condition
							/>
						</div>
					</div>
				</div>
			</div>

			<div className="row" ref={tableRef}>
				{children}
			</div>
		</div>
	);
};
