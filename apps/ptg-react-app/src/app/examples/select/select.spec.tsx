import { BrowserRouter } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import MultiSelectCheckbox from './select';

describe('PtgUiSignup', () => {
  let container: any;
  let getAllByText:any;
  it('should render successfully', async () => {
    const component = render(
      <BrowserRouter>
        <MultiSelectCheckbox />
      </BrowserRouter>
    );
    container = component.container;
    getAllByText = component.getAllByText;
    fireEvent.click(container.querySelector('.searchBox '));
    fireEvent.click(getAllByText('Indore')[0]);
  });
});
