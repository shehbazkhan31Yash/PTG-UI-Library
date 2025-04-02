import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { PtgUiAccordion } from './Accordion';

describe('PtgUiAccordion', () => {
	const mockHandleToggle = jest.fn();
	const accordionItems = [
		{ title: 'Item 1', content: 'Content 1' },
		{ title: 'Item 2', content: 'Content 2' },
		{ title: 'Item 3', content: 'Content 3' },
	];

	it('should render all accordion items', () => {
		render(<PtgUiAccordion accordionItems={accordionItems} handleToggle={mockHandleToggle} activeIndex={-1} />);

		accordionItems.forEach((item) => {
			expect(screen.getByText(item.title)).toBeInTheDocument();
		});
	});

	it('should display the content of the active accordion item', () => {
		render(<PtgUiAccordion accordionItems={accordionItems} handleToggle={mockHandleToggle} activeIndex={1} />);

		expect(screen.getByText('Content 2')).toBeVisible();
	});

	it('should call handleToggle when an accordion button is clicked', () => {
		render(<PtgUiAccordion accordionItems={accordionItems} handleToggle={mockHandleToggle} activeIndex={-1} />);

		const button = screen.getByText('Item 1');
		fireEvent.click(button);

		expect(mockHandleToggle).toHaveBeenCalledWith(0);
	});

	it('should apply the correct class to the active accordion item', () => {
		render(<PtgUiAccordion accordionItems={accordionItems} handleToggle={mockHandleToggle} activeIndex={0} />);

		const button = screen.getByText('Item 1');
		expect(button).toHaveClass('collapsed');
	});
});
