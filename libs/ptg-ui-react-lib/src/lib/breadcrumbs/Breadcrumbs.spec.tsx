import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { PtgUiBreadcrumbs } from './Breadcrumbs';
import { BrowserRouter } from 'react-router-dom';

describe('PtgUiBreadcrumbs', () => {
	const datalist = [
		{ title: 'Home', link: '/' },
		{ title: 'Products', link: '/products' },
		{ title: 'Electronics', link: '/products/electronics' },
		{ title: 'Mobile Phones' },
	];

	const renderComponent = () => (
		<BrowserRouter>
			<PtgUiBreadcrumbs datalist={datalist} />
		</BrowserRouter>
	);
	test('renders breadcrumb items correctly', () => {
		render(renderComponent());

		// Check if all breadcrumb items are rendered
		datalist.forEach((item) => {
			expect(screen.getByText(item.title)).toBeTruthy();
		});
	});

	test('renders links correctly', () => {
		render(renderComponent());

		// Check if links are rendered correctly
		datalist.forEach((item) => {
			if (item.link) {
				const linkElement = screen.getByText(item.title).closest('a');
				expect(linkElement).toHaveAttribute('href');
			}
		});
	});

	test('renders last breadcrumb item without link', () => {
		render(renderComponent());

		// Check if the last breadcrumb item does not have a link
		const lastItem = datalist[datalist.length - 1];
		const lastItemElement = screen.getByText(lastItem.title);
		expect(lastItemElement.closest('a')).toBeNull();
	});
});
