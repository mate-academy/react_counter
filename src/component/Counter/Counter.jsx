import React from 'react';
import { Button } from '../Button/Button';
import './Counter.scss';

export class Counter extends React.Component {
  state = {
    count: 0,
  }

  addOne = () => {
    this.setState(state => ({
      count: state.count + 1,
    }));
  };

  add100 = () => {
    this.setState(state => ({
      count: state.count + 100,
    }));
  };

  increase = () => {
    this.addOne();

    if (this.state.count % 5 === 0) {
      this.add100();
    }
  };

  render() {
    return (
      <div className="container">
        <h1 className="
          container__title
          h1
          border
          border-2
          border-dark
          rounded
        "
        >
          {`Count: ${this.state.count}`}
        </h1>
        <Button onClick={this.addOne} text="Add 1" />
        <Button onClick={this.add100} text="Add 100" />
        <Button onClick={this.increase} text="Increase" />
      </div>
    );
  }
}
