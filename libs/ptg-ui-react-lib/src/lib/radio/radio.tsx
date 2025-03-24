import { PtgUiRadioProps } from '@ptg-react-libs/interfaces';
import './radio.scss';
/**
 * PtgUiRadio Component
 * 
 * A functional component that renders a customizable radio.
 * 
 * @param {Readonly<PtgUiRadioProps>} props - The props for the radio component.
 * @param {string} props.name - The name attribute for the radio input.
 * @param {string} props.value - The value attribute for the radio input.
 * @param {string} props.id - The id attribute for the radio input.
 * @param {string} props.htmlFor - The htmlFor attribute for the radio label.
 * @param {function} props.onChange - The function to call when the radio input changes.
 * @param {Array<{ id: string; name: string; value: string }>} props.list - The list of radio options.
 * @param {React.ReactNode} props.children - Any additional content to display inside the radio component.
 * @param {boolean} props.checked - Indicates if the radio input is checked.
 * 
 * @returns {JSX.Element} A JSX element representing the radio component.
 */


export function PtgUiRadio({ name, value, id, onChange, list }:  Readonly<PtgUiRadioProps>) {
	return (
        <div>
            {list?.map((item) => (
                <div className="form-check mx-1" key={item.id}>
                    <input
                        className="form-check-input"
                        type="radio"
                        name={name}
                        id={`${id}${item.id}`}
                        value={item.value}
                        onChange={onChange}
                        checked={item.value === value}
                        data-testid={item.name}
                    />
                    <label className="form-check-label" htmlFor={`${id}${item.id}`}>
                        {item.name}
                    </label>
                </div>
            ))}
        </div>
    );
}

export default PtgUiRadio;
