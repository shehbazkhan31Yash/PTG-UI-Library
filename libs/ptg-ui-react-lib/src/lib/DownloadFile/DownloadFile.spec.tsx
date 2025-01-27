import { render } from '@testing-library/react';
import PtgUiDownload from './DownloadFile';

describe('downloadFile', () => {
  it('should render successfully', () => {
    const { baseElement, getByTestId } = render(<PtgUiDownload />);
  });
});
