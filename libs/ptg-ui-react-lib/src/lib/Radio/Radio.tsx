/* eslint-disable jsx-a11y/no-access-key */
/**
 * @since March 2022
 * @author Harsha Zalawa
 * @desc Reusable Radio Component
 *
 */
import './radio.scss';

export interface PtgUiRadioProps {
  name?: string;
  value?: string;
  id?: string;
  htmlFor?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  list: { id: string; name: string; value: string }[];
  children?: React.ReactNode;
  checked?: boolean;
  accessKey?: string;
}

export function PtgUiRadio({
  name,
  value,
  id,
  onChange,
  list,
  htmlFor,
  accessKey,
}: PtgUiRadioProps) {
  return (
    <>
      {list?.map((item) => (
        <div className="form-check mx-1" key={item.id}>
          <input
            className="form-check-input"
            type="radio"
            name={name}
            id={id + item.id}
            value={item.value}
            onChange={onChange}
            checked={item.value === value}
            accessKey={accessKey}
            data-testid={item.name}
          />
          <label className="form-check-label" htmlFor={id + item.id}>
            {item.name}
          </label>
        </div>
      ))}
    </>
  );
}

export default PtgUiRadio;
