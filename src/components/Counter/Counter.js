import React, { Component } from 'react';
import { Button } from '../Button/Button';
import './Counter.css';

export class Counter extends Component {
  state = {
    counter: 0,
  };

  handleCount(value) {
    this.setState(prevState => ({
      counter: prevState.counter + value,
    }));
  }

  render() {
    return (
      <div>
        <h1>
          {'Count:'}
          {this.state.counter}
        </h1>
        <span>
          <Button
            sign="+"
            counter={this.state.counter}
            updateCount={sign => this.handleCount(sign)}
          />
          <Button
            sign="-"
            counter={this.state.counter}
            updateCount={sign => this.handleCount(sign)}
          />
        </span>
      </div>
    );
  }
}
