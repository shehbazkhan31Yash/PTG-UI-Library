import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { PtgUiCustomAvatar } from './CustomAvatar';

describe('PtgUiCustomAvatar Component', () => {
	test('renders an image avatar when src is provided', () => {
		render(<PtgUiCustomAvatar src="test-image.jpg" alt="Test Avatar" />);
		const imgElement = screen.getByRole('img');
		expect(imgElement).toBeInTheDocument();
		expect(imgElement).toHaveAttribute('src', 'test-image.jpg');
		expect(imgElement).toHaveAttribute('alt', 'Test Avatar');
	});

	test('Render avatar for circle variant', () => {
		render(<PtgUiCustomAvatar variant="circle" src="test-image.jpg" alt="Test Avatar" />);
		const avatarElement = screen.getByRole('img');
		expect(avatarElement).toHaveStyle({ borderRadius: '50%' });
	});

	test('Render avatar for rounded variant', () => {
		render(<PtgUiCustomAvatar variant="rounded" src="test-image.jpg" alt="Test Avatar" />);
		const avatarElement = screen.getByRole('img');
		expect(avatarElement).toHaveStyle({ borderRadius: '10%' });
	});

	test('Render avatar for square variant', () => {
		render(<PtgUiCustomAvatar variant="square" src="test-image.jpg" alt="Test Avatar" />);
		const avatarElement = screen.getByRole('img');
		expect(avatarElement).toHaveStyle({ borderRadius: '0' });
	});

	test('Render for named avatars', () => {
		render(<PtgUiCustomAvatar backgroundColor="blue">AB</PtgUiCustomAvatar>);
		const fallbackElement = screen.getByText('AB');
		expect(fallbackElement).toHaveStyle({ backgroundColor: 'blue' });
	});
});
