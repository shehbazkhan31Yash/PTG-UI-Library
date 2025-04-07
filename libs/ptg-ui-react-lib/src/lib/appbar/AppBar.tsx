import React, { useEffect, useRef, useState } from 'react';
import { primaryColor, secondaryColor } from '@ptg-react-libs/constants/Constants';
import { IAppBarProps } from '@ptg-react-libs/interfaces';

/**
 * AppBar component to render a customizable navigation bar.
 *
 * This component provides a flexible app bar with options for logo placement, menu alignment,
 * burger menu (dropdown or drawer), and controlled or uncontrolled menu state. It also supports
 * click outside to close functionality.
 *
 * @param {IAppBarProps} props - The properties for the AppBar component.
 * @param {Object} props.menuConfig - Configuration for the menu, including alignment, colors, and items.
 * @param {boolean} [props.openMenu] - Controlled state to determine if the menu is open.
 * @param {Function} [props.closeMenu] - Callback function triggered when the menu is closed.
 * @returns {JSX.Element} The rendered AppBar component.
 */
export const AppBar: React.FC<IAppBarProps> = ({ menuConfig, openMenu: controlledMenuOpen, closeMenu }) => {
	const [menuOpen, setLocalMenuOpen] = useState(controlledMenuOpen || false);
	const menuRef = useRef<HTMLDivElement>(null);

	const toggleMenu = () => {
		const newState = !menuOpen;
		setLocalMenuOpen(newState);
		if (closeMenu) {
			closeMenu(newState); // Call the parent's closeMenu function if provided
		}
	};

	const closeMenuHandler = () => {
		setLocalMenuOpen(false);
		if (closeMenu) {
			closeMenu(false); // Call the parent's closeMenu function if provided
		}
	};

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
				closeMenuHandler();
			}
		};
		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	useEffect(() => {
		if (controlledMenuOpen !== undefined) {
			setLocalMenuOpen(controlledMenuOpen); // Sync local state with controlled prop
		}
	}, [controlledMenuOpen]);

	const backgroundColor =
		menuConfig.backgroundColor === 'primary'
			? primaryColor
			: menuConfig.backgroundColor === 'secondary'
			? secondaryColor
			: '#333';

	return (
		<nav
			style={{
				width: '100%',
				display: 'flex',
				padding: '10px 20px',
				boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
				position: menuConfig.static ? 'relative' : 'fixed',
				top: menuConfig.position === 'top' ? 0 : 'auto',
				bottom: menuConfig.position === 'bottom' ? 0 : 'auto',
				backgroundColor: backgroundColor,
				color: menuConfig.textColor || '#fff',
				justifyContent:
					menuConfig.menuAlignment === 'right' && menuConfig.logoAlignment === 'right' ? 'flex-end' : 'flex-start',
			}}
		>
			<div
				style={{
					display: 'flex',
					width: '100%',
					alignItems: 'center',
					justifyContent: 'space-between',
					flexDirection: 'row',
					margin: '0 40px',
				}}
			>
				{menuConfig.logo && (
					<div style={{ order: menuConfig.logoAlignment === 'left' ? -1 : 1 }}>
						<img src={menuConfig.logo} alt="Logo" style={{ height: '40px', cursor: 'pointer' }} />
					</div>
				)}
				{!menuConfig.burgerMenu && <div>{menuConfig.menuItems}</div>}
				{menuConfig.burgerMenu && (
					<div
						ref={menuRef}
						style={{
							position: 'relative',
							marginLeft: menuConfig.menuAlignment === 'right' ? 'auto' : '0',
						}}
					>
						<button
							onClick={toggleMenu}
							style={{
								background: 'none',
								border: 'none',
								fontSize: '24px',
								cursor: 'pointer',
							}}
						>
							☰
						</button>
						{menuOpen && menuConfig.burgerMenuType === 'dropdown' && (
							<div
								style={{
									position: 'absolute',
									top: menuConfig.position === 'bottom' ? 'auto' : '100%',
									bottom: menuConfig.position === 'bottom' ? '100%' : 'auto',
									backgroundColor: backgroundColor,
									padding: '10px',
									boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
									borderRadius: '5px',
									minWidth: '150px',
									maxHeight: '300px',
									overflowY: 'auto',
									scrollbarWidth: 'none',
									msOverflowStyle: 'none',
									zIndex: 1000,
									left: menuConfig.menuAlignment === 'left' ? '0' : 'auto',
									right: menuConfig.menuAlignment === 'right' ? '0' : 'auto',
									width: 'auto',
									height: 'auto',
									display: 'flex',
									flexDirection: 'column',
								}}
							>
								<div
									style={{
										display: 'flex',
										justifyContent: 'space-between',
										alignItems: 'center',
										marginBottom: '10px',
									}}
								>
									<span style={{ flexGrow: 1 }}></span>
									<button
										onClick={closeMenuHandler}
										style={{
											background: 'none',
											border: 'none',
											fontSize: '24px',
											cursor: 'pointer',
										}}
									>
										✖
									</button>
								</div>
								<div
									style={{
										maxHeight: '300px',
										overflowY: 'auto',
										scrollbarWidth: 'none',
										msOverflowStyle: 'none',
									}}
								>
									{menuConfig.menuItems}
								</div>
							</div>
						)}
						{menuOpen && menuConfig.burgerMenuType === 'drawer' && (
							<div
								style={{
									position: 'fixed',
									top: 0,
									left: 0, // Position the drawer on the left
									height: '100%',
									width: '250px',
									backgroundColor: backgroundColor,
									boxShadow: '2px 0 5px rgba(0, 0, 0, 0.5)',
									transform: menuOpen ? 'translateX(0)' : 'translateX(-100%)', // Slide in from the left
									transition: 'transform 0.3s ease',
									zIndex: 1000,
								}}
							>
								<div
									style={{
										display: 'flex',
										justifyContent: 'space-between',
										alignItems: 'center',
										padding: '10px',
									}}
								>
									<h3 style={{ color: menuConfig.textColor || '#fff' }}>Menu</h3>
									<button
										onClick={closeMenuHandler}
										style={{
											background: 'none',
											border: 'none',
											fontSize: '24px',
											cursor: 'pointer',
										}}
									>
										✖
									</button>
								</div>
								<div
									style={{
										padding: '10px',
										maxHeight: 'calc(100% - 50px)',
										overflowY: 'auto',
										scrollbarWidth: 'none',
										msOverflowStyle: 'none',
									}}
								>
									{menuConfig.menuItems}
								</div>
							</div>
						)}
					</div>
				)}
			</div>
		</nav>
	);
};
