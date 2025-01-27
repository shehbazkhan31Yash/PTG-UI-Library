
import { render, fireEvent } from'@testing-library/react';



import Pipes from './pipes';

describe('Pipes', () => {
  it('should render successfully', () => {
    const { baseElement,getByTestId} = render(<Pipes showPipeCode />);
    expect(baseElement).toBeTruthy();
    fireEvent.change(getByTestId('cname'), {
      target: { value: 'test@test.com' },
    });
    fireEvent.change(getByTestId('inr'), {
      target: { value: '2610' },
    });
    fireEvent.change(getByTestId('truncateStr'), {
      target: { value: 'shortText' },
    });
    fireEvent.change(getByTestId('phoneNumber'), {
      target: { value: '9131229005' },
    });
    fireEvent.change(getByTestId('truncateStr'), {

      target: { value: 'ItsAVeryLongTest' },

    });
  });

});
