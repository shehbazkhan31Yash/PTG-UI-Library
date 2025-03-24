import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { PtgUiCarousel } from './carousel';

describe('PtgUiCarousel', () => {
	interface ImageItem {
		image: string;
		title?: string;
		description?: { __html: string };
		shape?: 'circle' | 'square' | 'rectangle';
		backgroundColor?: string;
		cardModeEnable?: boolean;
		maxWidth?: string;
		margin?: string;
		padding?: string;
		buttonProps?: {
			iconLeft: string;
			iconRight: string;
			style?: React.CSSProperties;
		};
	}

	const buttonProps = {
		iconLeft: '<',
		iconRight: '>',
		style: {
			backgroundColor: 'brown',
			color: 'white',
			width: '40px',
			height: '40px',
		},
	};
	const items: ImageItem[] = [
		{
			image: 'image1.jpg',
			title: 'Title 1',
			description: { __html: '<p>Description 1</p>' }, // Ensure this is a valid HTML string
			backgroundColor: '#f00',
			shape: 'rectangle',
			maxWidth: '300px',
			margin: '10px',
			padding: '10px',
		},
		{
			image: 'image2.jpg',
			title: 'Title 2',
			description: { __html: '<p>Description 2</p>' }, // Ensure this is a valid HTML string
			backgroundColor: '#0f0',
			shape: 'rectangle',
			maxWidth: '300px',
			margin: '10px',
			padding: '10px',
		},
		{
			image: 'image3.jpg',
			title: 'Title 3',
			description: { __html: '<p>Description 3</p>' }, // Ensure this is a valid HTML string
			backgroundColor: '#00f',
			shape: 'rectangle',
			maxWidth: '300px',
			margin: '10px',
			padding: '10px',
		},
	];

	test('renders dot navigation', () => {
		render(<PtgUiCarousel items={items} navigationOnIcon={false} />);

		// Check if the dot navigation buttons are rendered
		const dots = screen.getAllByRole('button', { name: /Slide/i });
		expect(dots).toHaveLength(items.length);
	});

	test('renders icon navigation', () => {
		render(<PtgUiCarousel items={items} navigationOnIcon={true} />);

		// Check if the icon navigation buttons are rendered
		const icons = screen.getAllByRole('button', { name: /Slide/i });
		expect(icons).toHaveLength(items.length);
	});

	test('renders the carousel with items', () => {
		render(
			<PtgUiCarousel
				items={items}
				backgroundColor="white"
				buttonPosition="middle"
				navigationIconWidth="60px"
				navigationIconHeight="60px"
				navigationOnIcon={true}
				buttonProps={buttonProps}
			/>
		);

		// Check if the first item's title is rendered
		expect(screen.getByText('Title 1')).toBeInTheDocument();
		expect(screen.getByText('Description 1')).toBeInTheDocument();
	});

	test('navigates to the next slide', () => {
		render(<PtgUiCarousel items={items} />);

		// Click the next button
		fireEvent.click(screen.getByText('>'));

		// Check if the second item's title is rendered
		expect(screen.getByText('Title 2')).toBeInTheDocument();
		expect(screen.queryByText('Title 1')).not.toBeInTheDocument();
	});

	test('navigates to the previous slide', () => {
		render(<PtgUiCarousel items={items} />);

		// Navigate to the second slide first
		fireEvent.click(screen.getByText('>'));

		// Click the previous button
		fireEvent.click(screen.getByText('<'));

		// Check if the first item's title is rendered again
		expect(screen.getByText('Title 1')).toBeInTheDocument();
		expect(screen.queryByText('Title 2')).not.toBeInTheDocument();
	});

	test('navigates to the correct slide when clicking on dot navigation', () => {
		render(<PtgUiCarousel items={items} navigationOnIcon={false} />);

		// Click on the second dot
		fireEvent.click(screen.getAllByRole('button', { name: /Slide 2/i })[0]);

		// Check if the second item's title is rendered
		expect(screen.getByText('Title 2')).toBeInTheDocument();
		expect(screen.queryByText('Title 1')).not.toBeInTheDocument();
	});

	test('navigates to the correct slide when clicking on icon navigation', () => {
		render(<PtgUiCarousel items={items} navigationOnIcon={true} />);

		// Click on the second icon
		fireEvent.click(screen.getAllByRole('button', { name: /Slide 2/i })[0]);

		// Check if the second item's title is rendered
		expect(screen.getByText('Title 2')).toBeInTheDocument();
		expect(screen.queryByText('Title 1')).not.toBeInTheDocument();
	});

	test('wraps around to the first slide after the last slide', () => {
		render(<PtgUiCarousel items={items} />);

		// Navigate to the last slide
		fireEvent.click(screen.getByText('>'));
		fireEvent.click(screen.getByText('>'));

		// Click next again to wrap around
		fireEvent.click(screen.getByText('>'));

		// Check if the first item's title is rendered
		expect(screen.getByText('Title 1')).toBeInTheDocument();
	});

	test('wraps around to the last slide from the first slide', () => {
		render(<PtgUiCarousel items={items} />);

		// Click previous to wrap around
		fireEvent.click(screen.getByText('<'));

		// Check if the last item's title is rendered
		expect(screen.getByText('Title 3')).toBeInTheDocument();
	});
});
