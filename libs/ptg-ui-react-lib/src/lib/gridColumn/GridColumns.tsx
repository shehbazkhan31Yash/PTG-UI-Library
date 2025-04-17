import { IGridColumnUiProps } from '@ptg-react-libs/interfaces';
import './GridColumns.css';

/**
 * PtgUiGridColumn component to render a responsive grid column.
 *
 * This component dynamically generates class names for grid column sizes and offsets
 * based on the provided props. It supports Bootstrap-like grid system properties.
 *
 * @param {IGridColumnUiProps} props - The properties for the PtgUiGridColumn component.
 * @param {number | string} [props.xl] - The number of columns to span on extra-large screens.
 * @param {number | string} [props.lg] - The number of columns to span on large screens.
 * @param {number | string} [props.md] - The number of columns to span on medium screens.
 * @param {number | string} [props.sm] - The number of columns to span on small screens.
 * @param {number | string} [props.xs] - The number of columns to span on extra-small screens.
 * @param {number | string} [props.offsetLg] - The number of columns to offset on large screens.
 * @param {number | string} [props.offsetMd] - The number of columns to offset on medium screens.
 * @param {number | string} [props.offsetSm] - The number of columns to offset on small screens.
 * @param {string} [props.className] - Additional custom class names to apply to the column.
 * @param {React.ReactNode} [props.children] - The content to render inside the grid column.
 * @param {Object} [props.params] - Additional props to pass to the underlying `div` element.
 * @returns {JSX.Element} The rendered grid column component.
 */
export const PtgUiGridColumn = (props: IGridColumnUiProps) => {
	const {
		xl = '',
		children = '',
		lg = '',
		md = '',
		sm = '',
		xs = '',
		offsetLg = '',
		offsetMd = '',
		offsetSm = '',
		className = '',
		...params
	} = props;

	// Construct the custom class names based on the props
	const classNames = [
		xl ? `ptg-ui-col-xl-${xl}` : '',
		lg ? `ptg-ui-col-lg-${lg}` : '',
		md ? `ptg-ui-col-md-${md}` : '',
		sm ? `ptg-ui-col-sm-${sm}` : '',
		xs ? `ptg-ui-col-xs-${xs}` : '',
		offsetLg ? `ptg-ui-offset-lg-${offsetLg}` : '',
		offsetMd ? `ptg-ui-offset-md-${offsetMd}` : '',
		offsetSm ? `ptg-ui-offset-sm-${offsetSm}` : '',
		className,
	]
		.filter(Boolean)
		.join(' '); // Filter out any empty strings

	return (
		<div className={classNames} {...params}>
			{children}
		</div>
	);
};
