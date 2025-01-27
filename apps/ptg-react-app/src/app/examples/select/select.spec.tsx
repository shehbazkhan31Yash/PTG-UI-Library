import { BrowserRouter } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import selectEvent from 'react-select-event';
import MultiSelectCheckbox from './select';

describe('PtgUiSignup', () => {
  let container: any;
  let getByTestId: any;
  let getByText: any;
  let getByLabelText: any;
  let getAllByText:any;
  it('should render successfully', async () => {
    const component = render(
      <BrowserRouter>
        <MultiSelectCheckbox />
      </BrowserRouter>
    );
    container = component.container;
    getByTestId = component.getByTestId;
    getByText = component.getByText;
    getAllByText = component.getAllByText;
    getByLabelText = component.getByLabelText;
    fireEvent.click(container.querySelector('.searchBox '));
    fireEvent.click(getAllByText('Indore')[0]);
  });
});
