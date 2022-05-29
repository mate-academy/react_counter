import React from 'react';
import './App.scss';
import { Counter } from './components/Counter';

type Props = {};

class App extends React.PureComponent<Props> {
  render() {
    return (
      <div className="container">
        <Counter />
      </div>
    );
  }
}

export default App;
