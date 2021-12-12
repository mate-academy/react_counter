import React from 'react';
import './App.scss';
import { Counter } from './components/Counter';

const App: React.FC = () => (
  <>
    <h1 className="Title">Sweetheart, how much money you need?</h1>
    <Counter />
  </>
);

export default App;
