import { RowUiProps } from '@ptg-react-libs/interfaces';

export const PtgUiRow = (props: RowUiProps) => {
	const { children, className = '' } = props;
	return <div className={`row ${className}`}>{children}</div>;
};
