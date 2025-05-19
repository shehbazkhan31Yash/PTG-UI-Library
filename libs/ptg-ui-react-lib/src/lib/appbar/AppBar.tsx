import React, { useCallback, useEffect, useRef, useState } from 'react';
import './AppBar.css'; // Import the CSS file
import { IAppBarProps } from '@ptg-react-libs/interfaces';
import { colorMap, defaultMenuConfig } from '../constants/Constants';

/**
 * AppBar component to render a customizable navigation bar.
 *
 * This component provides a flexible app bar with options for logo placement, menu alignment,
 * burger menu (dropdown or drawer), and controlled or uncontrolled menu sta  te. It also supports
 * click outside to close functionality.
 *
 * @param {IAppBarProps} props - The properties for the AppBar component.
 * @param {Object} props.menuConfig - Configuration for the menu, including alignment, colors, and items.
 * @param {boolean} [props.openMenu] - Controlled state to determine if the menu is open.
 * @param {Function} [props.closeMenu] - Callback function triggered when the menu is closed.
 * @returns {JSX.Element} The rendered AppBar component.
 */
export const PtgUiAppBar: React.FC<IAppBarProps> = ({
	menuConfig,
	openMenu: controlledMenuOpen, // Controlled state for menu open
	closeMenu, // Function to set menu open state
}) => {
	const [menuOpen, setMenuOpen] = useState(controlledMenuOpen ?? false); // Use controlled state or local state
	const menuConfigState = { ...defaultMenuConfig, ...menuConfig }; // State for menu configuration

	const menuRef = useRef<HTMLDivElement>(null);

	const toggleMenu = () => {
		const newState = !menuOpen;
		setMenuOpen(newState);
		if (closeMenu) {
			closeMenu(newState); // Call the parent's closeMenu function if provided
		}
	};

	const closeMenuHandler = useCallback(() => {
        setMenuOpen(false);
        if (closeMenu) {
            closeMenu(false); // Call the parent's closeMenu function if provided
        }
    }, [closeMenu]);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
				closeMenuHandler();
			}
		};
		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, [closeMenuHandler]);

	useEffect(() => {
		if (controlledMenuOpen !== undefined) {
			setMenuOpen(controlledMenuOpen); // Sync local state with controlled prop
		}
	}, [controlledMenuOpen]);

	return (
		<nav
			className={`app-bar ${menuConfigState.static ? 'app-bar-relative' : 'app-bar-fixed'} ${
				menuConfigState.position === 'top' ? 'app-bar-top' : 'app-bar-bottom'
			}`}
			style={{
				backgroundColor: colorMap[menuConfigState.backgroundColor],
				color: menuConfigState.textColor ?? '#fff',
				justifyContent:
					menuConfigState.menuAlignment === 'right' && menuConfigState.logoAlignment === 'right'
						? 'flex-end'
						: 'flex-start',
			}}
		>
			<div className="app-bar-content">
				{menuConfigState.logo && (
					<div style={{ order: menuConfigState.logoAlignment === 'left' ? -1 : 1 }}>
						<img src={menuConfigState.logo} alt="Logo" className="logo" />
					</div>
				)}
				{!menuConfigState.burgerMenu && <div>{menuConfigState.menuItems}</div>}
				{menuConfigState.burgerMenu && (
					<div
						ref={menuRef}
						className="burger-menu"
						style={{
							backgroundColor: colorMap[menuConfigState.backgroundColor],
							marginLeft: menuConfigState.menuAlignment === 'right' ? 'auto' : '0',
						}}
					>
						<button onClick={toggleMenu} className="burger-button">
							☰
						</button>
						{menuOpen && menuConfigState.burgerMenuType === 'dropdown' && (
							<div
								className="dropdown-menu"
								style={{
									backgroundColor: colorMap[menuConfigState.backgroundColor],
									left: menuConfigState.menuAlignment === 'left' ? '0' : 'auto',
									right: menuConfigState.menuAlignment === 'right' ? '0' : 'auto',
								}}
							>
								<div className="menu-header">
									<span style={{ flexGrow: 1 }}></span>
									<button onClick={closeMenuHandler} className="close-button">
										✖
									</button>
								</div>
								<div className="menu-content">{menuConfigState.menuItems}</div>
							</div>
						)}
						{menuOpen && menuConfigState.burgerMenuType === 'drawer' && (
							<div
								className="drawer-menu"
								style={{
									backgroundColor: colorMap[menuConfigState.backgroundColor],
									transform: menuOpen ? 'translateX(0)' : 'translateX(-100%)',
									left: menuConfigState.menuAlignment === 'left' ? '0' : 'auto',
									right: menuConfigState.menuAlignment === 'right' ? '0' : 'auto',
								}}
							>
								<div className="menu-header">
									<h3 style={{ color: menuConfigState.textColor ?? '#fff' }}>Menu</h3>
									<button onClick={closeMenuHandler} className="close-button">
										✖
									</button>
								</div>
								<div className="menu-content">{menuConfigState.menuItems}</div>
							</div>
						)}
					</div>
				)}
			</div>
		</nav>
	);
};
