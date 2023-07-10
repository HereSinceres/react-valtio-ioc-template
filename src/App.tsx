import './App.css';

import viteLogo from '/vite.svg';
import { useState } from 'react';

import reactLogo from './assets/react.svg';
import { Account } from './module/account/account.component';
import { Renderer } from './module/renderer';
import { Todo } from './module/todo';
import { ValtioDemo } from './module/user-info';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className='App'>
            {/* <Renderer /> */}
            {/* <ValtioDemo /> */}
            <Account />
            <hr />
            <Todo /> 
        </div>
    );
}

export default App;
