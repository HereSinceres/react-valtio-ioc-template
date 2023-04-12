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
export const TodoComponent = (props: Props) => {
    const todoService = useInstance(TodoService);
    return (
        <>
            <TodoViewComponent />
            <TodoAction />
        </>
    );
};
