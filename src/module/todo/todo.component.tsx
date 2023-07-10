import React from 'react';
import { useInstance } from 'react-ioc';

import { TodoAction } from './todo-action';
import { TodoService, useComputedTwoServcice } from './todo.service';

type Props = {};

const TodoViewComponent = (props: Props) => {
    const todoService = useInstance(TodoService).useSnapshot();
    return (
        <>
            <div>{todoService.count}</div>
        </>
    );
};
const TodoViewNameComponent = (props: Props) => {
    const todoService = useInstance(TodoService).useSnapshot();
    return (
        <>
            <div>{todoService.name}</div>
        </>
    );
};
const TodoViewChangeNameComponent = (props: Props) => {
    const todoService = useInstance(TodoService);
    const name = useComputedTwoServcice();
    return (
        <div>
            <button
                onClick={() => {
                    todoService.setName(Math.random() + '');
                }}
            >
                Todo Name{name}
            </button>
        </div>
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
