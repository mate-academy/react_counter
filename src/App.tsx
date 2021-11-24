import React from 'react';
import './App.scss';
import { Counter } from './components/Counter';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="App__counter">
        <Counter />
      </div>
    </div>
  );
};

export default App;
