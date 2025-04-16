import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { PtguseFetch } from './useFetch';

// Mock the global fetch function
global.fetch = jest.fn();

interface Item {
	id: number; // Type of id
	name: string; // Type of name
}

const TestComponent = ({ url }) => {
	const { data, isLoading, error } = PtguseFetch(url);
	return (
		<div>
			{isLoading && <span>Loading...</span>}
			{error && <span>Error: {error}</span>}
			{data && data.map((item: Item) => <div key={item?.id}>{item?.name}</div>)}
		</div>
	);
};

describe('PtguseFetch', () => {
	afterEach(() => {
		jest.clearAllMocks(); // Clear mocks after each test
	});

	it('should initialize with default values', () => {
		const { getByText } = render(<TestComponent url="test-url" />);

		expect(getByText(/Loading.../)).toBeInTheDocument(); // Loading should be true initially
	});

	it('should fetch data successfully', async () => {
		const mockData = { data: [{ id: 1, name: 'Item 1' }] };
		(fetch as jest.Mock).mockResolvedValueOnce({
			ok: true,
			json: jest.fn().mockResolvedValueOnce(mockData),
		});

		const { findByText } = render(<TestComponent url="test-url" />);

		expect(await findByText('Item 1')).toBeInTheDocument(); // Check if the item is rendered
	});

	it('should handle fetch error', async () => {
		(fetch as jest.Mock).mockResolvedValueOnce({
			ok: false,
			status: 404,
		});

		const { findByText } = render(<TestComponent url="test-url" />);

		expect(await findByText(/Error: 404/)).toBeInTheDocument(); // Check if the error message is rendered
	});

	it('should handle unknown errors', async () => {
		(fetch as jest.Mock).mockRejectedValueOnce(new Error('Network Error'));

		const { findByText } = render(<TestComponent url="test-url" />);

		expect(await findByText(/Error: Network Error/)).toBeInTheDocument(); // Check if the error message is rendered
	});

	it('should handle non-errors object', async () => {
		(fetch as jest.Mock).mockRejectedValueOnce('Network Error');

		const { findByText } = render(<TestComponent url="test-url" />);

		expect(await findByText(/An unknown error occurred/)).toBeInTheDocument(); // Check if the error message is rendered
	});
});
