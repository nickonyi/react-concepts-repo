import { useState } from 'react';
import './App.css';
import ButtonComponent from './ButtonComponent';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <ButtonComponent />
    </>
  );
}

export default App;
