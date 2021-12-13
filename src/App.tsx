import React from 'react';
import { Counter } from './components/Counter/Counter';
import './App.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <Counter />
    </div>
  );
};

export default App;
