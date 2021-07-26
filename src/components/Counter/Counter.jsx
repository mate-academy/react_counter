import React from 'react';
import { Button } from '../Button';

export class Counter extends React.Component {
  state = {
    counter: 0,
  }

  addOne = () => {
    this.setState(state => ({
      counter: state.counter + 1,
    }));
  };

  addHundred = () => {
    this.setState(state => ({
      counter: state.counter + 100,
    }));
  };

  increase = () => {
    if (this.state.counter % 5 === 0) {
      this.addHundred();
    }

    this.addOne();
  };

  render() {
    return (
      <>
        <h1>
          Count:
          {' '}
          {this.state.counter}
        </h1>
        <Button
          text="Add one"
          onClick={this.addOne}
        />
        <Button
          text="Add 100"
          onClick={this.addHundred}
        />
        <Button
          text="Increase"
          onClick={this.increase}
        />
      </>
    );
  }
}
