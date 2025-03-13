import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { PtgUiCarousel } from './carousel';

describe('PtgUiCarousel', () => {
    const defaultProps = {
        imgHeight: '400px',
        imgWidth: '600px',
        images: ['image1.jpg', 'image2.jpg', 'image3.jpg'],
        showIndicators: true,
    };

    test('renders the carousel with images', () => {
        render(<PtgUiCarousel {...defaultProps} />);
        const images = screen.getAllByAltText('Carousel');
        expect(images).toHaveLength(defaultProps.images.length);
    });

    test('renders the correct image dimensions', () => {
        render(<PtgUiCarousel {...defaultProps} />);
        const slides = screen.getByRole('list');
        expect(slides).toHaveStyle(`min-height: ${defaultProps.imgHeight}`);
        expect(slides).toHaveStyle(`width: ${defaultProps.imgWidth}`);
    });

    test('renders the carousel indicators when showIndicators is true', () => {
        render(<PtgUiCarousel {...defaultProps} />);
        const indicators = screen.getAllByLabelText('Slide dots');
        expect(indicators).toHaveLength(defaultProps.images.length);
    });

    test('does not render the carousel indicators when showIndicators is false', () => {
        render(<PtgUiCarousel {...defaultProps} showIndicators={false} />);
        const indicators = screen.queryAllByLabelText('Slide dots');
        expect(indicators).toHaveLength(0);
    });

    test('renders the correct number of radio buttons', () => {
        render(<PtgUiCarousel {...defaultProps} />);
        const radioButtons = screen.getAllByRole('radio');
        expect(radioButtons).toHaveLength(defaultProps.images.length);
    });

    test('renders the correct aria-labels for navigation buttons', () => {
        render(<PtgUiCarousel {...defaultProps} />);
        const prevButtons = screen.getAllByLabelText('Previous Slide');
        const nextButtons = screen.getAllByLabelText('Next Slide');
        expect(prevButtons).toHaveLength(defaultProps.images.length);
        expect(nextButtons).toHaveLength(defaultProps.images.length);
    });
});