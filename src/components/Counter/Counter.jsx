import React, { Component } from 'react';
import { Button } from '../Button/Button';

export class Counter extends Component {
  state = {
    count: 0,
  };

  addOne = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  };

  add100 = () => {
    this.setState(prevState => ({
      count: prevState.count + 100,
    }));
  };

  increase = () => {
    this.addOne();

    if (this.state.count !== 0 && this.state.count % 5 === 0) {
      this.add100();
    }
  };

  render() {
    return (
      <>
        <h1>
          Count:
          {this.state.count}
        </h1>
        <Button
          action={this.addOne}
          text="Add 1"
        />
        <Button
          action={this.add100}
          text="Add 100"
        />
        <Button
          action={this.increase}
          text="Increase"
        />
      </>
    );
  }
}
