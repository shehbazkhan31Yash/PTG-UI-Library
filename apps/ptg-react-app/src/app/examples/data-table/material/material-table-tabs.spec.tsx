import { render } from '@testing-library/react';
import Highcharts from './material-table-tabs';

describe('DataTable', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Highcharts />);
    expect(baseElement).toBeTruthy();
  });
});
