import { IPtgUiBreadcrumbsProps } from '@ptg-react-libs/interfaces';
import './breadcrumbs.css';

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
	return (
		<ul className="breadcrumb"> 
			{datalist?.map((item: { title: string; link?: string }, i: number) => {
				if (datalist?.length - 1 > i) { 
					return (
						<li key={item.title}> 
							<a href={`${item?.link}`}>{item?.title}</a>
						</li>
					);
				}
				return <li key={item?.title}>{item?.title}</li>;
			})}
		</ul>
	);
};
