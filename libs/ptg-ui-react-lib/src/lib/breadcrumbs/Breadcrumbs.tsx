import './breadcrumbs.css';

export const PtgUiBreadcrumbs = ({ datalist }) => {
	return (
		<ul className="breadcrumb">
			{datalist?.map((item, i) => {
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
