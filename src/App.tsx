import React from 'react';
import './App.scss';

import { Counter } from './Components/Components/Counter';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="App__container">
        <Counter />
      </div>
    </div>
  );
};

export default App;
