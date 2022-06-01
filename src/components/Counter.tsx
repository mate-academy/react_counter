import React from 'react';
import './Counter.scss';
import { Button } from './Button';

type State = {
  counter: number;
};

export class Counter extends React.Component<{}, State> {
  state: State = {
    counter: 0,
  };

  addOne = () => {
    this.setState((state) => ({
      counter: state.counter + 1,
    }));
  };

  add100 = () => {
    this.setState((state) => ({
      counter: state.counter + 100,
    }));
  };

  increase = () => {
    this.addOne();

    if (this.state.counter % 5 === 0) {
      this.add100();
    }
  };

  render() {
    const { counter } = this.state;

    return (
      <section>
        <h1>{`Count: ${counter}`}</h1>

        <Button
          name="Add 1"
          action={this.addOne}
        />

        <Button
          name="Add 100"
          action={this.add100}
        />

        <Button
          name="Increase"
          action={this.increase}
        />
      </section>
    );
  }
}
