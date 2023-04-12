import React from 'react';
import { provider } from 'react-ioc';

import { TodoComponent } from './todo.component';
import { TodoService } from './todo.service';

type Props = {};

export const Todo = provider( TodoService, )(TodoComponent);
