/**
 * @since April 2022
 * @author Harsha Zalawa
 * @desc Drag and Drop example using react-beautiful-dnd library
 */
 
import { useState, useEffect } from 'react';
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from 'react-beautiful-dnd';
import { PtguseFetch } from '@ptg-ui/libs/ptg-ui-react-lib/src';
import './drag-n-drop.scss';
 
export function DragExampleOne() {
  // const [user, setUser] = useState(USERS);
  const [dataList, setDataList] = useState(null || []);
  const { data:apiData } = PtguseFetch('drag-drop-lists') as any
 
  useEffect(() => {
    setDataList(apiData[0]?.attributes?.dragdrop)
  },[apiData])
 
 
  /* istanbul ignore next */
  const onDragEnd = (result: DropResult) => {
   
    const { source, destination } = result;
    if (!destination) return;
    // const users = Array.from(user);
    const [newOrder] = dataList.splice(source.index, 1);
    dataList.splice(destination.index, 0, newOrder);
    // setUser(users);
  };
 
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="todo">
        {(provided) => (
          <div
            className="m-4"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {dataList?.map(({ id, text }, index) => {
              return (
                <Draggable key={id} draggableId={id} index={index}>
                  {(provided) => (
                    <div
                      className="example-one-list  display-flex "
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      id={'drag' + id}
                    >
                      <div className="example-one-list-view">
                        <div>
                          <span {...provided.dragHandleProps}>
                            <i className="fa fa-bars" aria-hidden="true"></i>
                          </span>
                        </div>
                        <div>
                          <p className="m-0">
                            {index + 1} - {text}
                          </p>
                        </div>
                        <div>
                          <span {...provided.dragHandleProps}>
                            <i className="fa fa-bars" aria-hidden="true"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </Draggable>
              );
            })}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
 
export default DragExampleOne;