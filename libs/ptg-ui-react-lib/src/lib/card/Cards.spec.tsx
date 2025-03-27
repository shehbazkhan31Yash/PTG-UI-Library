import { render, screen, fireEvent } from '@testing-library/react';
import { PtgUiCard } from './Cards';

describe('PtgUiCard Component', () => {

    test('renders without crashing', () => {
        render(<PtgUiCard />);
        expect(screen.getByText(/card/i)).toBeInTheDocument();
    });


    test('renders title, description, and image when provided', () => {
        const title = 'Test Title';
        const description = 'Test Description';
        const image = 'https://via.placeholder.com/150';

        render(<PtgUiCard title={title} description={description} image={image} />);

        expect(screen.getByText(title)).toBeInTheDocument();
        expect(screen.getByText(description)).toBeInTheDocument();
        expect(screen.getByAltText('card')).toHaveAttribute('src');
    });


    test('does not render image when image prop is not provided', () => {
        render(<PtgUiCard title="Test Title" description="Test Description" />);
        const image = screen.queryByAltText('card');
        expect(image).not.toBeInTheDocument();
    });


    test('renders button with correct text and calls onClick when clicked', () => {
        const handleClick = jest.fn();
        const buttonText = 'Click Me';

        render(<PtgUiCard buttonText={buttonText} onClick={handleClick} />);

        const button = screen.getByRole('button', { name: buttonText });
        expect(button).toBeInTheDocument();
        fireEvent.click(button);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });


    test('does not render button when buttonText prop is not provided', () => {
        render(<PtgUiCard />);
        const button = screen.queryByRole('button');
        expect(button).not.toBeInTheDocument();
    });


    test('applies correct background color from props', () => {
        const backgroundColor = 'lightblue';
        render(<PtgUiCard backgroundColor={backgroundColor} />);
        const card = screen.getByRole('article');
        expect(card).toHaveStyle(`background-color: ${backgroundColor}`);
    });


    test('renders children correctly', () => {
        render(
            <PtgUiCard>
                <p>Child Content</p>
            </PtgUiCard>
        );
        expect(screen.getByText('Child Content')).toBeInTheDocument();
    });

});