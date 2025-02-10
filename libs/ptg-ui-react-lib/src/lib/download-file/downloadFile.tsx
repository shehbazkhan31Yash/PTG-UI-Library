/**
 * @since March 2022
 * @author Ankit Patidar
 * @uses Reusable Component for download file
 *
 */
import React, { createRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { ExportToCsv } from 'export-to-csv';
import { PtgUiButton } from '../button/button';

interface PtgUiDownloadFileProps {
	allowFileTypes?: any;
	children?: any;
	excelColumns?: any;
	excelDataToDownload?: any;
	downloadBtnText?: string;
}

export class PtgUiDownload extends React.Component<PtgUiDownloadFileProps> {
	constructor(props) {
		super(props);
		this.state = {
			selecteType: '',
			myRef: createRef(),
		};
	}

	override render() {
		const { selecteType, myRef }: any = this.state;
		const {
			excelColumns = [''],
			excelDataToDownload = [],
			allowFileTypes = ['PDF', 'EXCEL', 'JPG', 'WORD'],
			children,
			downloadBtnText = 'Download',
		} = this.props;
		const tableEl = myRef;

		const newAllowTypes = allowFileTypes?.map((item: any, index: any) => {
			return { label: item, value: item };
		});

		const onSelectHandle = (fileType: any) => {
			const value = fileType.target.value.toUpperCase();
			this.setState({ selecteType: value.toUpperCase() });
		};

		const download = () => {
			switch (selecteType) {
				case 'EXCEL':
					downloadExcel(excelDataToDownload);
					break;
				case 'JPG':
				case 'JPEG':
					image();

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

		const downloadExcel = (data: any) => {
			const csvExporter = new ExportToCsv();
			csvExporter.generateCsv([excelColumns, ...data]);
		};

		const generateBlob = (data: any, type: any) => {
			return new Blob([data], { type });
		};

		const getElementAndAsignBlob = (blob: any, fileName: any) => {
			const element: any = document.createElement('a');
			element.href = URL.createObjectURL(blob);
			element.download = fileName;
			element.click();
		};

		const downloadWordFile = () => {
			const blob = generateBlob(createTable(), 'application/msword');
			getElementAndAsignBlob(blob, 'word.doc');
		};

		const createTable = () => {
			const table: any = tableEl;

			return table.current.outerHTML;
		};
		/* istanbul ignore next */
		const image = async () => {
			const element = tableEl.current;
			const canvas = await html2canvas(element);

			const data = canvas.toDataURL('image/jpg');
			const link = document.createElement('a');

			if (typeof link.download === 'string') {
				link.href = data;
				link.download = 'image.jpg';

				document.body.appendChild(link);
				link.click();
				document.body.removeChild(link);
			} else {
				window.open(data);
			}
		};
		/* istanbul ignore next */
		const downloadPdfFile: any = async () => {
			const element = tableEl.current;
			const canvas = await html2canvas(element);
			const data = canvas.toDataURL('image/png');

			// const pdf = new jsPDF("p", "mm");
			// const imgProperties = pdf.getImageProperties(data);

			// var width = pdf.internal.pageSize.getWidth();
			// var height = pdf.internal.pageSize.getHeight();
			// pdf.addImage(data, 'PNG', 0, 0, width, height);
			// pdf.save('print.pdf');

			const fileWidth = 208;
			const fileHeight = (canvas.height * fileWidth) / canvas.width;
			const PDF = new jsPDF('p', 'mm', 'a4');
			const position = 0;
			PDF.addImage(data, 'PNG', 0, position, fileWidth, fileHeight);
			PDF.save('example.pdf');
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
									value={selecteType}
								>
									<option value="">Select</option>
									{newAllowTypes?.map((item, index) => {
										return (
											<option key={index} value={item.value}>
												{item.label}
											</option>
										);
									})}
								</select>
							</div>

							<div className="ms-2 mr-7">
								<PtgUiButton
									text={downloadBtnText}
									textColor="#fff"
									backgroundColor={'#052982'}
									onClick={download}
									width="110px"
									fontSize="14px"
									disabled={selecteType === '' ? true : false}
								></PtgUiButton>
							</div>
						</div>
					</div>
				</div>

				<div className="row" ref={tableEl}>
					{children}
				</div>
			</div>
		);
	}
}

//PtgUiDownload.defaultProps = defaultProps;
//export default PtgUiDownload;
