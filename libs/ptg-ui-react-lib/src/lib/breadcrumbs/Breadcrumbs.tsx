import { IPtgUiBreadcrumbsProps } from '@ptg-react-libs/interfaces';
import './breadcrumbs.css';
import { Link } from 'react-router-dom';

/**
 * PtgUiBreadcrumbs Component
 * 
 * A functional component that renders a breadcrumb navigation list.
 * 
 * @param {IPtgUiBreadcrumbsProps} props - The props for the component.
 * @param {Array<{ title: string; link?: string }>} props.datalist - An array of breadcrumb items, 
 * where each item has a title and an optional link.
 * 
 * @returns {JSX.Element} A JSX element representing the breadcrumb navigation.
 */

export const PtgUiBreadcrumbs = ({ datalist }: IPtgUiBreadcrumbsProps) => {
	const handleClick = (event) => {
		event.preventDefault();
		// Your custom logic here
	};

	return (
		<nav aria-label="breadcrumb">
			<ol className="breadcrumb">
				{datalist.map((breadcrumb, index) => (
					<li key={breadcrumb.title} className={`breadcrumb-item ${index === datalist.length - 1 ? 'active' : ''}`}>
						{index === datalist.length - 1 ? (
							breadcrumb.title
						) : (
							<Link to={breadcrumb.link || '#'} onClick={handleClick}>{breadcrumb.title}</Link>
						)}
					</li>
				))}
			</ol>
		</nav>
	);
};
