import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { PtgUiDownload } from './downloadFile';
import { ExportToCsv } from 'export-to-csv';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

jest.mock('export-to-csv', () => {
	const generateCsvMock = jest.fn((data) => {
		// Simulate the expected behavior of including headers and data rows
		return data;
	});
	return {
		ExportToCsv: jest.fn().mockImplementation(() => ({
			generateCsv: generateCsvMock,
		})),
		generateCsvMock,
	};
});

jest.mock('html2canvas', () => jest.fn());
jest.mock('jspdf', () => {
	const mockAddImage = jest.fn();
	const mockSave = jest.fn();
	const mockJsPDF = jest.fn().mockImplementation(() => {
		return {
			addImage: mockAddImage,
			save: mockSave,
		};
	});
	return {
		__esModule: true,
		default: mockJsPDF,
		mockAddImage,
		mockSave,
	};
});

beforeAll(() => {
	Object.defineProperty(global, 'URL', {
		value: {
			createObjectURL: jest.fn(),
		},
		writable: true,
	});
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

	it('renders correctly with default allowed file types and excel columns/data', () => {
		render(
			<PtgUiDownload>
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
		const button = screen.getByText('Download');
		const generateCsvMock = jest.requireMock('export-to-csv').generateCsvMock;
		fireEvent.click(button); // Trigger the download logic
		expect(generateCsvMock).toHaveBeenCalledWith([...excelDataToDownload]);

		expect(ExportToCsv).toHaveBeenCalled();
		const exportToCsvInstance = new ExportToCsv();
		expect(exportToCsvInstance.generateCsv).toHaveBeenCalledWith([...excelDataToDownload]);
	});

	it('downloads PDF file', async () => {
		const mockCanvas = {
			toDataURL: jest.fn().mockReturnValue('data:image/png;base64,'),
			width: 208,
			height: 208,
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

		const button = screen.getByText('Download');
		const { mockAddImage } = jest.requireMock('jspdf');
		fireEvent.click(button); // Trigger the download logic

		await screen.findByText('Download'); // Wait for async operations to complete

		expect(mockAddImage).toHaveBeenCalledWith('data:image/png;base64,', 'PNG', 0, 0, 208, 208);
		expect(html2canvas).toHaveBeenCalled();
		expect(jsPDF).toHaveBeenCalledWith('p', 'mm', 'a4');
		expect(mockAddImage).toHaveBeenCalledWith('data:image/png;base64,', 'PNG', 0, 0, 208, 208);
		const pdfInstance = new jsPDF();
		expect(pdfInstance.addImage).toHaveBeenCalled();
		expect(pdfInstance.save).toHaveBeenCalledWith('example.pdf');
	});

	it('downloads JPG file', async () => {
		const mockCanvas = {
			toDataURL: jest.fn().mockReturnValue('data:image/jpeg;base64,'),
			width: 208,
			height: 208,
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
		fireEvent.change(select, { target: { value: 'JPG' } });

		const button = screen.getByText('Download');
		fireEvent.click(button); // Trigger the download logic

		await screen.findByText('Download'); // Wait for async operations to complete

		expect(html2canvas).toHaveBeenCalled();
		const { mockAddImage } = jest.requireMock('jspdf');
		expect(mockAddImage).toHaveBeenCalledWith('data:image/png;base64,', 'PNG', 0, 0, 208, 208);
	});

	it('downloads WORD file', async () => {
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
		fireEvent.change(select, { target: { value: 'WORD' } });

		const button = screen.getByText('Download');
		fireEvent.click(button); // Trigger the download logic

		expect(html2canvas).toHaveBeenCalled();
		// Add any specific expectations for WORD file download if applicable
	});

	it('handles unsupported file type selection', () => {
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
		fireEvent.change(select, { target: { value: 'UNSUPPORTED' } });

		const button = screen.getByText('Download');
		fireEvent.click(button); // Trigger the download logic

		// Add assertions to verify the behavior for unsupported file types
		expect(screen.queryByText('Download')).toBeInTheDocument();
		// You can add more specific checks based on the expected behavior
	});

	it('disables download button when no file type is selected', () => {
		render(
			<PtgUiDownload
				excelColumns={excelColumns}
				excelDataToDownload={excelDataToDownload}
				allowFileTypes={allowFileTypes}
			/>
		);

		const button = screen.getByRole('button', { name: 'Download' });
		expect(button).toBeDisabled();
	});
});
