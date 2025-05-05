import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { PtgUiModal } from './modal';
describe('PtgUiModal', () => {
	const defaultProps = {
		isOpen: true,
		modalSize: 'sm',
		showHeader: true,
		header: 'Test Header',
		showFooter: true,
		confirmButton: 'Confirm',
		cancelButton: 'Cancel',
		onConfirmed: jest.fn(),
		onModalClose: jest.fn(),
		backdropClick: true,
		content: 'Test Content',
		confirmButtonColor: '#2196f3',
		cancelButtonColor: '#dd3434',
	};

	const customProps = {
		isOpen: true,
		header: 'Test Header',
		confirmButton: 'Confirm',
		cancelButton: 'Cancel',
		onConfirmed: jest.fn(),
		onModalClose: jest.fn(),
		content: 'Test Content',
	};

	it('should render the modal with custom props', () => {
		render(<PtgUiModal {...customProps} />);
		expect(screen.getByRole('dialog')).toBeInTheDocument();
	});

	it('should render the modal when isOpen is true', () => {
		render(<PtgUiModal {...defaultProps} />);
		expect(screen.getByRole('dialog')).toBeInTheDocument();
	});

	it('should not render the modal when isOpen is false', () => {
		render(<PtgUiModal {...defaultProps} isOpen={false} />);
		expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
	});

	it('should display the header when showHeader is true', () => {
		render(<PtgUiModal {...defaultProps} />);
		expect(screen.getByText('Test Header')).toBeInTheDocument();
	});

	it('should not display the header when showHeader is false', () => {
		render(<PtgUiModal {...defaultProps} showHeader={false} />);
		expect(screen.queryByText('Test Header')).not.toBeInTheDocument();
	});

	it('should display the footer when showFooter is true', () => {
		render(<PtgUiModal {...defaultProps} />);
		expect(screen.getByText('Confirm')).toBeInTheDocument();
		expect(screen.getByText('Cancel')).toBeInTheDocument();
	});

	it('should not display the footer when showFooter is false', () => {
		render(<PtgUiModal {...defaultProps} showFooter={false} />);
		expect(screen.queryByText('Confirm')).not.toBeInTheDocument();
		expect(screen.queryByText('Cancel')).not.toBeInTheDocument();
	});

	it('should call onConfirmed when the confirm button is clicked', () => {
		render(<PtgUiModal {...defaultProps} />);
		fireEvent.click(screen.getByText('Confirm'));
		expect(defaultProps.onConfirmed).toHaveBeenCalled();
	});

	it('should call onModalClose when the cancel button is clicked', () => {
		render(<PtgUiModal {...defaultProps} />);
		fireEvent.click(screen.getByText('Cancel'));
		expect(defaultProps.onModalClose).toHaveBeenCalled();
	});

	it('should call onModalClose when the close button is clicked', () => {
		render(<PtgUiModal {...defaultProps} />);
		fireEvent.click(screen.getByLabelText('Close modal'));
		expect(defaultProps.onModalClose).toHaveBeenCalled();
	});

	it('should display custom children when provided', () => {
		render(
			<PtgUiModal {...defaultProps}>
				<div>Custom Children</div>
			</PtgUiModal>
		);
		expect(screen.getByText('Custom Children')).toBeInTheDocument();
	});

	it('should display content when children are not provided', () => {
		render(<PtgUiModal {...defaultProps} />);
		expect(screen.getByText('Test Content')).toBeInTheDocument();
	});
});
