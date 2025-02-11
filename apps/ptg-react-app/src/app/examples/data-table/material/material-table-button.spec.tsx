import { render, fireEvent } from '@testing-library/react';
import { PtgUiMaterialTableButtonExample } from "./material-table-button";


//test case for PtgUiMaterialTableButtonExample
describe('DragNDrop', () => {
  it('should render successfully', () => {
    const { baseElement, container, getByText } = render(<PtgUiMaterialTableButtonExample />);
    expect(baseElement).toBeTruthy();
    fireEvent.click(container.querySelectorAll('.MuiButtonBase-root')[1]);
    fireEvent.click(getByText('Export PDF'));
    fireEvent.click(container.querySelectorAll('.MuiButtonBase-root')[1]);
    fireEvent.click(getByText('Export CSV'));
    fireEvent.click(container.querySelectorAll(".btn-sm")[0]);
  });
});


