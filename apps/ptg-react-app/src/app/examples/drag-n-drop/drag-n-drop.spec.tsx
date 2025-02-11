import { render, fireEvent } from '@testing-library/react';

import DragNDrop from './drag-n-drop';
import DragExampleOne from './dragExampleOne';
import DragExampleTwo from './dragExampleTwo';

//test case for DragNDrop
describe('DragNDrop', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DragNDrop />);
    expect(baseElement).toBeTruthy();
  });
});

//test case for DragExampleOne
describe('DragExampleOne', () => {
  let container: any;
  it('should render successfully', async () => {
    const component = render(<DragExampleOne />);
    container = component.container;

    expect(component.baseElement).toBeTruthy();
    const rangeDate = container.querySelector('#drag1 i');
    fireEvent.mouseDown(rangeDate);
    fireEvent.mouseUp(rangeDate);
  });
});

//test case for DragExampleTwo
describe('DragExampleTwo', () => {
  it('should render successfully', () => {
    const component = render(<DragExampleTwo />);
    expect(component.baseElement).toBeTruthy();
  });
});
