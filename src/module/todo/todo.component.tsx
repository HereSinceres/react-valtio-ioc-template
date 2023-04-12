import React from 'react';
import { useInstance } from 'react-ioc';

import { TodoAction } from './todo-action';
import { TodoService } from './todo.service';

type Props = {};

const TodoViewComponent = (props: Props) => {
  const todoService = useInstance(TodoService);
  return (
      <>
          <div>{todoService.state.count}</div>
      </>
  );
};
const TodoViewNameComponent = (props: Props) => {
    const todoService = useInstance(TodoService);
    return (
        <>
            <div>{todoService.state.name}</div>
        </>
    );
};
const TodoViewChangeNameComponent = (props: Props) => {
    const todoService = useInstance(TodoService);
    return (
        <>
            <div onClick={()=>{
              todoService.setName(Math.random()+'');
            }}> Change Name</div>
        </>
    );
};
export const TodoComponent = (props: Props) => {
    return (
        <>
            <TodoViewComponent />
            <TodoAction />
            <TodoViewNameComponent />
            <TodoViewChangeNameComponent />
        </>
    );
};
