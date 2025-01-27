/**
 * @since March 2022
 * @author Harsha Zalawa
 * @desc Reusable Select Component
 *
 */
import './select.scss';
import { Form } from 'react-bootstrap';
//import Select from 'react-select';
/* eslint-disable-next-line */
export interface PtgUiSelectProps {
  name?: string;
  value?: string;
  id?: string;
  className?: string;
  list: { label: string; value: string }[];
  onBlur?: ()=>void;
  htmlFor?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function PtgUiSelect({
  name,
  value,
  id,
  className,
  list,
  onBlur,
  onChange,
  htmlFor,
}: PtgUiSelectProps) {
  return (
    <Form.Group controlId="formBasicSelect" className={className}>
      <Form.Control
        as="select"
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        className={className}
        name={name}
        data-testid={name}
        id={id}
      >
        <option value="" className="d-none" disabled selected>
          Select
        </option>
        {list?.map((item, key) => (
          <option key={key} value={item.value}>
            {item.label}
          </option>
        ))}
      </Form.Control>
    </Form.Group>
  );
}

export default PtgUiSelect;
