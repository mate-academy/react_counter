import React, { Component } from 'react';
import { Counter } from './components/Counter';
import '../node_modules/bootswatch/dist/sketchy/bootstrap.min.css';
import './App.css';

export class App extends Component {
  state = {
    counter: 0,
  };

  handlerIncrement = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1,
    }));
  };

  handlerDecrement = () => {
    this.setState(prevState => ({
      counter: prevState.counter - 1,
    }));
  };

  render() {
    return (
      <div className="jumbotron">
        <Counter
          counerValue={this.state.counter}
          incrementFunction={this.handlerIncrement}
          decrimentFunction={this.handlerDecrement}
        />
      </div>
    );
  }
}
