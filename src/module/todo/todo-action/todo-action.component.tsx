import React from 'react';
import { useInstance } from 'react-ioc';

import { TodoService } from '../todo.service';

type Props = {};

export const TodoActionComponent = (props: Props) => {
    const todoService = useInstance(TodoService);
    return (
        <div
            onClick={() => {
                todoService.inc();
            }}
        >
            TodoComponent
        </div>
    );
};
