import React from 'react';
import './App.scss';
import 'bulma/css/bulma.min.css';

import { Count } from './components/Count';

const App: React.FC = () => (
  <div className="container">
    <Count />
  </div>
);

export default App;
