import { fireEvent, render } from '@testing-library/react';
import DownloadFileExample from './downloadFile';

global.URL.createObjectURL = jest.fn();

describe('downloadFile', () => {
  it('should render successfully', () => {
    const { baseElement, getByTestId } = render(<DownloadFileExample />);
    expect(baseElement).toBeTruthy();

    //select downloadFile for pdf
    fireEvent.change(getByTestId('download'), {
      target: { value: 'PDF' },
    });
    //button
    fireEvent.click(getByTestId('downloadbutton'));

    //select downloadFile for JPG
    fireEvent.change(getByTestId('download'), {
      target: { value: 'JPG' },
    });
    //button
    fireEvent.click(getByTestId('downloadbutton'));

    //select downloadFile for word
    fireEvent.change(getByTestId('download'), {
      target: { value: 'WORD' },
    });
    //button
    fireEvent.click(getByTestId('downloadbutton'));

    //select downloadFile for excel
    fireEvent.change(getByTestId('download'), {
      target: { value: 'EXCEL' },
    });
    //button
    fireEvent.click(getByTestId('downloadbutton'));
  });
});
