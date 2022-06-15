import React from 'react';
import { Counter } from './component/Counter';

import './App.scss';

export const App: React.FC = () => {
  return (
    <div className="app">
      <Counter />
    </div>
  );
};

export default App;
