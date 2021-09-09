import React from 'react';
import './App.scss';
import { Counter } from './Components/Counter';

const App: React.FC = () => {
  return (
    <div className="counter">
      <Counter />
    </div>
  );
};

export default App;
