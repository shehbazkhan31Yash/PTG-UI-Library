import { render } from '@testing-library/react';
import { ICardProps } from '@ptg-react-libs/interfaces';
import { Card } from './card';

describe('Card Component', () => {
	const customProps: ICardProps = {
		image: 'test-image.jpg',
		title: 'Test Title',
		description: { __html: 'Test Description' },
		backgroundColor: '#fff',
		shape: 'circle',
		maxWidth: '300px',
		margin: '10px',
		padding: '10px',
	};

	const defaultProps: ICardProps = {
		image: 'test-image.jpg',
		title: 'Test Title',
		description: { __html: 'Test Description' },
	};

	it('should render the card with given props', () => {
		const { getByAltText, getByText } = render(<Card {...customProps} />);
		expect(getByAltText('Test Title').getAttribute('src')).toBe('test-image.jpg');
		expect(getByText('Test Title')).toBeInTheDocument();
		expect(getByText('Test Description')).toBeInTheDocument();
	});

	it('should render the card with default props', () => {
		const { getByAltText, getByText } = render(<Card {...defaultProps} />);
		expect(getByAltText('Test Title').getAttribute('src')).toBe('test-image.jpg');
		expect(getByText('Test Title')).toBeInTheDocument();
		expect(getByText('Test Description')).toBeInTheDocument();
	});

	it('should apply the correct styles', () => {
		const { container } = render(<Card {...customProps} />);
		const cardElement = container.firstChild;
		expect(cardElement).toHaveStyle('background-color: #fff');
		expect(cardElement).toHaveStyle('max-width: 300px');
		expect(cardElement).toHaveStyle('margin: 10px');
		expect(cardElement).toHaveStyle('padding: 10px');
	});

	it('should render without title and description', () => {
		const { queryByText } = render(<Card {...customProps} title={undefined} description={undefined} />);
		expect(queryByText('Test Title')).not.toBeInTheDocument();
		expect(queryByText('Test Description')).not.toBeInTheDocument();
	});
});
