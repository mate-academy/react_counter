import React from 'react';
import './App.scss';
import { Counter } from './components/Counter';

export const App: React.FC = () => {
  return (
    <div className="counter">
      <Counter />
    </div>
  );
};
