import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Sidenav } from './Sidenav';

describe('SideNav', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <Sidenav />
      </BrowserRouter>
    );
    expect(baseElement).toBeTruthy();
  });
});
