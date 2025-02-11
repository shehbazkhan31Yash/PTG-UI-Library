/**
 * @since April 2022
 * @author Ahilyabai Netaji Pawar
 * @UpdatedBy Harsha Zalawa
 * @desc Drag and Drop example using react-beautiful-dnd library
 */

import React, { useRef, useState } from 'react';
import './../drag-n-drop.scss';
import TodoList from './TodoList';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { PtgUiInput } from '@ptg-ui/react';
import { useTranslation } from 'react-i18next';


export interface DragExampleThreeProps {}

export function DragExampleThree(props: DragExampleThreeProps) {
  const { t } = useTranslation();
  const inputRef = useRef<HTMLInputElement>(null);
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Array<any>>([]);
  const [CompletedTodos, setCompletedTodos] = useState<Array<any>>([]);
  
  /* istanbul ignore next */

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo('');
    }
  };

  /* istanbul ignore next */
  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;
    if (!destination) return;
    let add;
    const active = todos;
    const complete = CompletedTodos;

    // Source Logic
    if (source.droppableId === 'TodosList') {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    // Destination Logic
    if (destination.droppableId === 'TodosList') {
      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }
    setCompletedTodos(complete);
    setTodos(active);
  };


  return (
  <DragDropContext onDragEnd={onDragEnd}>
      <form
        className="m-3"
        onSubmit={(e) => {
          handleAdd(e);
          inputRef.current?.blur();
        }}
      >
         <label
              htmlFor="entertodo"
              aria-labelledby="entertodo"
              tabIndex={0}
              hidden
            >
              {t('INPUT_TODO_PLACEHOLDER')}
          </label>
        <div className='col-md-12 col-sm-12'>
        <PtgUiInput
          type="text"
          placeholder={t('INPUT_TODO_PLACEHOLDER')}
          value={todo}
          onChange={(e: any) => setTodo(e.target.value)}
          className="w-50 form-control exampleThree"
          id="entertodo"
          name="entername"
        />
        </div>
      </form>
      <TodoList
        todos={todos}
        setTodos={setTodos}
        CompletedTodos={CompletedTodos}
        setCompletedTodos={setCompletedTodos}
      />
    </DragDropContext>
  );
}
export default DragExampleThree;
