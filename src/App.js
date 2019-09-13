import React from 'react';
import './App.css';
import Counter from './components/Counter/Counter';

function App() {
  return (
    <div>
      <Counter initialCount={0} />
      <Counter initialCount={200} />
    </div>
  );
}

export default App;
