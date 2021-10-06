import React from 'react';

import './App.scss';
import { Counter } from './components/Counter';

const App: React.FC = () => {
  return (
    <div className="App">
      <Counter />
    </div>
  );
};

export default App;
