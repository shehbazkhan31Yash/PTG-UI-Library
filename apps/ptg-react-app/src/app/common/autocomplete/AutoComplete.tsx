import { useState } from 'react';
import { PtgUiButton } from '@ptg-ui/react';

const AutocompleteInput = ({ field, form, items, inputClassName }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [inputValue, setInputValue] = useState(field.value);

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setSuggestions(
      value
        ? items.filter((item) =>
            item.toLowerCase().includes(value.toLowerCase())
          )
        : []
    );
    form.setFieldValue(field.name, value);
  };

  const handleSelect = (item) => {
    setInputValue(item);
    setSuggestions([]);
    form.setFieldValue(field.name, item);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Select a item"
        className={inputClassName}
      />
      {suggestions.length > 0 && (
        <ul
          style={{
            border: '1px solid #ccc',
            listStyleType: 'none',
            padding: 0,
          }}
        >
          {suggestions.map((item, index) => (
            <li key={item}>
              <PtgUiButton
                text={item}
                appearance={'link'}
                onClick={() => handleSelect(item)}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutocompleteInput;
