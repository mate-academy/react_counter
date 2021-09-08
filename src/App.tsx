/* eslint-disable no-console */
import React from 'react';
import './App.scss';
import { Counter } from './components/Counter';

export const App: React.FC = () => (
  <div className="container">
    <div className="counter">
      <Counter />
    </div>
  </div>
);
