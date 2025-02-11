import { render, fireEvent } from '@testing-library/react';
import DragExampleThree from './dragExampleThree';
import TodoList from './TodoList';
import { DragDropContext } from 'react-beautiful-dnd';
import userEvent from '@testing-library/user-event';

//test case for DragExampleThree
describe('DragExampleThree', () => {
  let getByTestId: any;
  it('enter the todo in inpute', () => {
    const component = render(<DragExampleThree />);
    getByTestId = component.getByTestId;
    expect(component.baseElement).toBeTruthy();
    const input = getByTestId('entername');
    fireEvent.change(input, {
      target: { value: 'testtodo' },
    });

    fireEvent.keyPress(input, {
      key: 'Enter',
      code: 13,
    });
  });
});

//test case for TodoList
describe('TodoList', () => {
  let container: any;
  it('enter the todo in inpute', () => {
    const component = render(
      <DragDropContext onDragEnd={() => jest.fn()}>
        <TodoList
          todos={[
            { id: 1, todo: 'test', isDone: true },
            { id: 2, todo: 'test', isDone: true },
          ]}
          setTodos={function (): void {
            throw new Error('Function not implemented.');
          }}
          setCompletedTodos={function (): void {
            throw new Error('Function not implemented.');
          }}
          CompletedTodos={[]}
        />
      </DragDropContext>
    );

    container = component.container;

    expect(component.baseElement).toBeTruthy();
    fireEvent.click(container.querySelectorAll('.drag-icon')[2]);
    fireEvent.click(container.querySelectorAll('.drag-icon')[1]);
    fireEvent.click(container.querySelectorAll('.drag-icon')[0]);
    userEvent.type(container.querySelector('.todos__single--text'), 'demo task');
    userEvent.type(container.querySelector('.todos__single--text'), '{enter}');
    fireEvent.focus(container.querySelector('.todos__single--text'));
    fireEvent.keyDown(container.querySelector('.todos__single--text'), {
      key: 'Enter',
      code: 'Enter',
      keyCode: 13,
      charCode: 13,
    });
  });
});
