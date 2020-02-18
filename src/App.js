import React, { Component } from 'react';
import { Counter } from './components/Counter';
import '../node_modules/bootswatch/dist/sketchy/bootstrap.min.css';
import './App.css';

export class App extends Component {
  state = {
    counter: 0,
  };

  handleIncrementDecrement = (e) => {
    const act = e.target.name === 'decrement'
      ? -1
      : +1;

    this.setState(prevState => ({
      counter: prevState.counter + act,
    }));
  };

  render() {
    return (
      <div className="jumbotron">
        <Counter
          counterValue={this.state.counter}
          incrementDecrement={e => this.handleIncrementDecrement(e)}
        />
      </div>
    );
  }
}
