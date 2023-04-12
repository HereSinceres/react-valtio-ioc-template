import './App.css';

import viteLogo from '/vite.svg';
import { useState } from 'react';

import reactLogo from './assets/react.svg';
import { Todo } from './todo';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className='App'>
            <Todo />
        </div>
    );
}

export default App;
