import React from 'react';
import './App.scss';
import { Counter } from './components/Counter';

const App: React.FC = () => (
  <div className="counter">
    <Counter />
  </div>
);

export default App;
