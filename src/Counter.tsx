import React from 'react';
import { Button } from './Button';
import './Counter.scss';

export class Counter extends React.Component<{}, State> {
  state: State = {
    count: 0,
  };

  addOne = () => {
    this.setState((prevState: State) => ({
      count: prevState.count + 1,
    }));
  };

  add100 = () => {
    this.setState((prevState: State) => ({
      count: prevState.count + 100,
    }));
  };

  increase = () => {
    if ((this.state.count) % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    const { count } = this.state;

    return (
      <div className="Counter">
        <h1 className="Counter__title">
          {`Count: ${count}`}
        </h1>
        <div className="Counter__buttons">
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
        </div>
      </div>
    );
  }
}
