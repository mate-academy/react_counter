import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Counter } from './components/Counter';

const App: React.FC = () => (
  <div className="App bg-warning vh-100 p-3">
    <Counter />
  </div>
);

export default App;
