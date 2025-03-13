/**
 * @since March 2022
 * @author Devang Kushwah
 * @uses Reusable Component for textarea
 *
 */

interface PtgUiTextAreaProps {
	placeholder?: string;
	className?: string;
	rows?: any;
	name?: string;
	id?: string;
	value?: string;
	onChange?: (event: any) => void | undefined;
	onBlur?: (event: any) => void | undefined;
}

const defaultProps: PtgUiTextAreaProps = {
	rows: '4',
	value: '',
	placeholder: '',
	id: '',
	className: '',
	name: ''
};

export function PtgUiTextArea({ ...rest }: PtgUiTextAreaProps) {
	return <textarea {...rest} data-testid={rest.name} />;
}
PtgUiTextArea.defaultProps = defaultProps;
export default PtgUiTextArea;
