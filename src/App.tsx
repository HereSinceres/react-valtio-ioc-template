import './App.css';

import viteLogo from '/vite.svg';
import { useState } from 'react';

import reactLogo from './assets/react.svg';
import { Account } from './module/account/account.component';
import { Todo } from './module/todo';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className='App'>
            <Account />
            <Todo />
        </div>
    );
}

export default App;
