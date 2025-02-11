import DataTable from './react-data-grid';
import { render, fireEvent } from '@testing-library/react';
import PtgUiAgGridExample from './ag-grid/ag-grid';
import { GRID_Data } from '@ptg-react-app/mock/grid-data';
import PtgUiReactTableExample from './react-table';
describe('DataTable', () => {
  it('should render successfully', () => {
    const { baseElement } =
      render(<DataTable {...GRID_Data}/>);
    expect(baseElement).toBeTruthy();
    // fireEvent.click(getByText('Petria Thomas'));
    // fireEvent.click(getAllByText('Click Here')[1]);
  });
});

// ag Grid table
describe('ag Grid', () => {
  it('should render successfully', () => {
    const { baseElement, getByText, container } = render(
      <PtgUiAgGridExample />
    );
    expect(baseElement).toBeTruthy();
    fireEvent.click(container.querySelectorAll('.btn-primary')[1]);
    fireEvent.click(container.querySelectorAll('.page-link')[2]);
    fireEvent.click(container.querySelectorAll('.page-link')[3]);
    fireEvent.click(container.querySelectorAll('.page-link')[1]);

    fireEvent.click(getByText('Previous'));
    fireEvent.click(getByText('Next'));
  });
});

// react table
describe('React Table', () => {
  it('should render successfully', () => {
    const { baseElement, getByText, container } = render(
      <PtgUiReactTableExample />
    );
    expect(baseElement).toBeTruthy();
    fireEvent.click(container.querySelectorAll('.page-link')[2]);
    fireEvent.click(container.querySelectorAll('.page-link')[3]);
    fireEvent.click(container.querySelectorAll('.page-link')[1]);

    fireEvent.click(getByText('Previous'));
    fireEvent.click(getByText('Next'));
  });
});
