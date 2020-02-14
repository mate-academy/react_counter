import React from 'react';
import './App.css';
import { Counter } from './components/Counter/Counter';

export class App extends React.Component {
  state = {
    counter: 0,
  };

  increaseCounter = () => {
    this.setState(prevState => (
      { counter: prevState.counter + 1 }
    ));
  };

  render() {
    return (
      <>
        <Counter counter={this.state.counter} />

        <button type="button" onClick={this.increaseCounter}>
          increase counter
        </button>
      </>
    );
  }
}
