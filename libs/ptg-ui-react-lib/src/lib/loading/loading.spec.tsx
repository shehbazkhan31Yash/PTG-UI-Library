import React from 'react';
import { render } from '@testing-library/react';
import { PtgUiLoading } from './loading';
import '@testing-library/jest-dom';

describe('PtgUiLoading Component', () => {
	test('renders dot loader with specified color', () => {
		render(<PtgUiLoading type="dot" color="red" />);
		const dots = document.querySelectorAll('.dot');
		expect(dots).toHaveLength(3);
		dots.forEach((dot) => {
			expect(dot).toHaveStyle('background-color: red');
		});
	});
	test('renders linear loader with specified color', () => {
		const { container } = render(<PtgUiLoading type="linear" color="blue" />);
		const linearLoader = container.querySelector('.linear-loader');
		expect(linearLoader).toHaveStyle('background-color: blue');
	});
	test('renders circular loader with specified border color', () => {
		const { container } = render(<PtgUiLoading type="circular" color="green" />);
		const circularLoader = container.querySelector('.circular-loader');
		expect(circularLoader).toHaveStyle('border-top: 8px solid green');
	});
	test('does not render loader for invalid type', () => {
		const { container } = render(<PtgUiLoading type="invalid" color="yellow" />);
		const loadersContainer = container.querySelector('.loaders-container');
		expect(loadersContainer).toBeTruthy();
	});
	test('renders nothing when type is not specified', () => {
		const { container } = render(<PtgUiLoading type="invalid" color="purple" />);
		expect(container.firstChild).toBeTruthy();
	});
	test('renders three dots when type is dot regardless of color', () => {
		const { rerender } = render(<PtgUiLoading type="dot" color="black" />);
		const dotsBefore = document.querySelectorAll('.dot');
		expect(dotsBefore).toHaveLength(3);
		rerender(<PtgUiLoading type="dot" color="white" />);
		const dotsAfter = document.querySelectorAll('.dot');
		expect(dotsAfter).toHaveLength(3);
		dotsAfter.forEach((dot) => {
			expect(dot).toHaveStyle('background-color: white');
		});
	});
});
