import React from 'react';
import './App.scss';
import { Counter } from './components/counter';

const App: React.FC = () => {
  return (
    <div className="app">
      <Counter />
    </div>
  );
};

export default App;
