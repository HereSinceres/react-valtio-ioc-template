import React from 'react';
import { provider } from 'react-ioc';

import { TodoActionComponent } from './todo-action.component';

type Props = {};

export const TodoAction = provider()(TodoActionComponent);
