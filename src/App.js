import React, {useState} from 'react';

import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
    return (
      <div>
        <p>Вы кликнули {count} раз(а)</p>
        <button onClick={() => setCount(count + 1)}>Нажми на меня</button>
      </div>
    );
}

export default App;
