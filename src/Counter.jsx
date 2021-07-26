import React from 'react';
import { Button } from './Button';

export class Counter extends React.Component {
  state = {
    counter: 0,
  }

  addOne = () => {
    this.setState(prevState => ({ counter: prevState.counter + 1 }));
  };

  add100 = () => {
    this.setState(prevState => ({ counter: prevState.counter + 100 }));
  };

  increase = () => {
    if (this.state.counter % 5 === 0 && this.state.counter) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    return (
      <div className="card">
        <h1 className="title is-primary">
          {`Count: ${this.state.counter}`}
        </h1>
        <Button textContent="+ 1" onclick={this.addOne} />
        <Button textContent="+ 100" onclick={this.add100} />
        <Button textContent="increase" onclick={this.increase} />
      </div>
    );
  }
}
