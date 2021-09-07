import React from 'react';

import { Button } from '../Button';
import './Buttons.scss';

type State = {
  counter: number;
};

export class Counter extends React.Component<{}, State> {
  state:State = {
    counter: 0,
  };

  addOne = () => {
    this.setState((prevState: State) => ({
      counter: prevState.counter + 1,
    }));
  };

  add100 = () => {
    this.setState((prevState: State) => ({
      counter: prevState.counter + 100,
    }));
  };

  increase = () => {
    if (this.state.counter % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    const { counter } = this.state;

    return (
      <>
        <h1>{`Count: ${counter}`}</h1>
        <div className="buttons">
          <Button buttonName="Add 1" action={this.addOne} />
          <Button buttonName="Add 100" action={this.add100} />
          <Button buttonName="Increase" action={this.increase} />
        </div>
      </>
    );
  }
}
