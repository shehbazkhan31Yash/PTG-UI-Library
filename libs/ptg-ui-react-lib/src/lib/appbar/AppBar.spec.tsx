import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { AppBar } from './AppBar';
import '@testing-library/jest-dom';
import { IAppBarProps } from '@ptg-react-libs/interfaces';

describe('AppBar Component', () => {
	const mockCloseMenu = jest.fn();

	const defaultProps: IAppBarProps = {
		menuConfig: {
			backgroundColor: 'primary',
			textColor: '#fff',
			menuAlignment: 'left',
			logoAlignment: 'left',
			position: 'top',
			static: false,
			burgerMenu: true,
			burgerMenuType: 'dropdown',
			menuItems: <div>Menu Item</div>,
			logo: 'logo.png',
		},
		openMenu: false,
		closeMenu: mockCloseMenu,
	};

	it('renders the AppBar with logo and menu items', () => {
		render(<AppBar {...defaultProps} />);
		expect(screen.getByAltText('Logo')).toBeInTheDocument();
	});

	it('toggles the burger menu when the button is clicked', () => {
		render(<AppBar {...defaultProps} />);
		const burgerButton = screen.getByText('☰');
		fireEvent.click(burgerButton);
		expect(screen.getByText('Menu Item')).toBeVisible();
		fireEvent.click(burgerButton);
		expect(screen.queryByText('Menu Item')).toBeNull();
	});

	it('closes the menu when clicking outside', () => {
		render(<AppBar {...defaultProps} />);
		const burgerButton = screen.getByText('☰');
		fireEvent.click(burgerButton);
		expect(screen.getByText('Menu Item')).toBeVisible();
		fireEvent.mouseDown(document.body);
		const menuItem = screen.queryByText('Menu Item');
		expect(menuItem).toBeNull();
	});

	it('calls closeMenu callback when menu is closed', () => {
		render(<AppBar {...defaultProps} />);
		const burgerButton = screen.getByText('☰');
		fireEvent.click(burgerButton);
		fireEvent.click(burgerButton);
		expect(mockCloseMenu).toHaveBeenCalledWith(false);
	});

	it('renders the drawer menu when burgerMenuType is "drawer"', () => {
		const props = {
			...defaultProps,
			menuConfig: { ...defaultProps.menuConfig, burgerMenuType: 'drawer' as const },
		};
		render(<AppBar {...props} />);
		const burgerButton = screen.getByText('☰');
		fireEvent.click(burgerButton);
		expect(screen.getByText('Menu Item')).toBeVisible();
	});

	it('applies the correct background color based on menuConfig', () => {
		const props = {
			...defaultProps,
			menuConfig: { ...defaultProps.menuConfig, backgroundColor: 'secondary' as const },
		};
		const { container } = render(<AppBar {...props} />);
		expect(container.firstChild).toHaveStyle('background-color: rgb(33, 150, 243)');
	});
});
