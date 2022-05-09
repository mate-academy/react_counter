import React from 'react';
import './App.scss';
import { Counter } from './Component/Counter/Counter';

class App extends React.PureComponent {
  render(): React.ReactNode {
    return (
      <div className="App">
        <Counter />
      </div>
    );
  }
}

export default App;
