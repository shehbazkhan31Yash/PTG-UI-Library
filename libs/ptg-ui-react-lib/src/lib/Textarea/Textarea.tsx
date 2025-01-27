/**
 * @since March 2022
 * @author Devang Kushwah
 * @uses Reusable Component for textarea
 *
 */


interface PtgUiTextAreaProps {
  value?: any;
  onChange?: any;
  placeholder?: string;
  disabled?: boolean;
  hasError?: boolean;
  onFocus?: any;
  dataTest?: string;
  required?: boolean;
  className?: string;
  inputsize?: string;
  name?: string;
  onBlur?: any;
  ref?: any;
  rows?: any;
  cols?: any;
  form?: any;
  maxlength?: any;
  onKeyUp?: any;
  id?: string;
  // accessKey?: string;
  //   isReadOnly?: boolean;
}

const defaultProps: PtgUiTextAreaProps = {
  rows:'4',
  value: '',
  placeholder: '',
  disabled: false,
  required: true,
  inputsize: 'lg',
  // accessKey: '',
  id: '',
};

export function PtgUiTextArea({ ...rest }: PtgUiTextAreaProps) {
  return <textarea {...rest} data-testid={rest.name}/>;
}
PtgUiTextArea.defaultProps = defaultProps;
export default PtgUiTextArea;
