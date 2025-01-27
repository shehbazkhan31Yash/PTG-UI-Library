
import { render, fireEvent } from'@testing-library/react';



import PipeEvent from './pipe-events';

describe('Pipes', () => {
  it('should render successfully', () => {
    const { baseElement,getByTestId} = render(<PipeEvent showEventCode />);
    expect(baseElement).toBeTruthy();
    fireEvent.change(getByTestId('phoneNumber'), {
      target: { value: '9726847987' },
    });
    fireEvent.focusOut(getByTestId('phoneNumber'))
  
    fireEvent.change(getByTestId('phoneNumber'), {
      target: { value: '+9726847987' },
    });
    fireEvent.focusOut(getByTestId('phoneNumber'))

    fireEvent.change(getByTestId('cname'), {
        target: { value: 'yashi' },
      });
      fireEvent.focusOut(getByTestId('cname'))

      fireEvent.change(getByTestId('inr'), {
        target: { value: '2610' },
      });
      fireEvent.focusOut(getByTestId('inr'))

      fireEvent.change(getByTestId('inr'), {
        target: { value: '₹2610' },
      });
      fireEvent.focusOut(getByTestId('inr'))

      fireEvent.change(getByTestId('inr'), {
        target: { value: 'yess' },
      });
      fireEvent.focusOut(getByTestId('inr'))
  });

});
