import React from 'react';
import { Counter } from './components';
import './App.scss';

const App: React.FC = () => {
  return (
    <div className="App d-flex align-items-center justify-content-center">
      <Counter />
    </div>
  );
};

export default App;
