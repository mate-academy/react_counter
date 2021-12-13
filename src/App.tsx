import React from 'react';
import './App.scss';
import { Counter } from './components/Counter/Counter';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="App__wrapper">
        <Counter />
      </div>
    </div>
  );
};

export default App;
