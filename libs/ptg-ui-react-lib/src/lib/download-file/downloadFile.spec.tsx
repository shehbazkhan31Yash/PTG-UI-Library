import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { PtgUiDownload } from './downloadFile';
import { ExportToCsv } from 'export-to-csv';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

jest.mock('export-to-csv', () => {
	const generateCsvMock = jest.fn();
	return {
		ExportToCsv: jest.fn().mockImplementation(() => ({
			generateCsv: generateCsvMock,
		})),
		generateCsvMock,
	};
});

jest.mock('html2canvas', () => jest.fn());
jest.mock('jspdf', () => {
	const mockJsPDF = jest.fn().mockImplementation(function () {
		return {
			addImage: jest.fn(),
			save: jest.fn(),
		};
	});
	return { default: mockJsPDF };
});

describe('PtgUiDownload', () => {
	const excelColumns = ['Column1', 'Column2'];
	const excelDataToDownload = [['Data1', 'Data2']];
	const allowFileTypes = ['PDF', 'EXCEL', 'JPG', 'WORD'];

	it('renders correctly', () => {
		render(
			<PtgUiDownload
				excelColumns={excelColumns}
				excelDataToDownload={excelDataToDownload}
				allowFileTypes={allowFileTypes}
			>
				<div>Test Content</div>
			</PtgUiDownload>
		);

		expect(screen.getByText('Download')).toBeInTheDocument();
		expect(screen.getByText('Test Content')).toBeInTheDocument();
	});

	it('handles file type selection', () => {
		render(
			<PtgUiDownload
				excelColumns={excelColumns}
				excelDataToDownload={excelDataToDownload}
				allowFileTypes={allowFileTypes}
			/>
		);

		const select = screen.getByRole('combobox');
		fireEvent.change(select, { target: { value: 'EXCEL' } });
		expect(select).toHaveValue('EXCEL');
	});

	it('downloads Excel file', () => {
		render(
			<PtgUiDownload
				excelColumns={excelColumns}
				excelDataToDownload={excelDataToDownload}
				allowFileTypes={allowFileTypes}
			/>
		);

		const select = screen.getByRole('combobox');
		fireEvent.change(select, { target: { value: 'EXCEL' } });
		const { generateCsvMock } = jest.requireMock('export-to-csv');
		expect(generateCsvMock).toHaveBeenCalledWith([excelColumns, ...excelDataToDownload]);

		expect(ExportToCsv).toHaveBeenCalled();
		const exportToCsvInstance = new ExportToCsv();
		expect(exportToCsvInstance.generateCsv).toHaveBeenCalledWith([excelColumns, ...excelDataToDownload]);
	});

	it('downloads PDF file', async () => {
		const mockCanvas = {
			toDataURL: jest.fn().mockReturnValue('data:image/png;base64,'),
			width: 100,
			height: 100,
		};
		(html2canvas as jest.Mock).mockResolvedValue(mockCanvas);

		render(
			<PtgUiDownload
				excelColumns={excelColumns}
				excelDataToDownload={excelDataToDownload}
				allowFileTypes={allowFileTypes}
			>
				<div>Test Content</div>
			</PtgUiDownload>
		);

		const select = screen.getByRole('combobox');
		fireEvent.change(select, { target: { value: 'PDF' } });

		const jspdfInstance = ((jsPDF as unknown) as jest.Mock).mock.instances[0];
		const button = screen.getByText('Download');
		fireEvent.click(button);
		expect(html2canvas).toHaveBeenCalled();
		expect(jspdfInstance).toHaveBeenCalledWith();
		expect(jspdfInstance.addImage).toHaveBeenCalledWith('data:image/png;base64,', 'PNG', 0, 0, 100, 100);
		expect(jspdfInstance.save).toHaveBeenCalledWith('example.pdf');
		const pdfInstance = new jsPDF();
		expect(pdfInstance.addImage).toHaveBeenCalled();
		expect(pdfInstance.save).toHaveBeenCalledWith('example.pdf');
	});

	it('disables download button when no file type is selected', () => {
		render(
			<PtgUiDownload
				excelColumns={excelColumns}
				excelDataToDownload={excelDataToDownload}
				allowFileTypes={allowFileTypes}
			/>
		);

		const button = screen.getByText('Download');
		expect(button).toBeDisabled();
	});
});