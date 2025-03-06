import { IPtgUiBreadcrumbsProps } from '@ptg-react-libs/interfaces';
import './breadcrumbs.css';

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

export default PtgUiBreadcrumbs;
