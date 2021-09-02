import React, { Props } from 'react';
import { Button } from './Button';
import './Counter.scss';

export class Counter extends React.Component<Props<State>, State> {
  state: State = {
    count: 0,
  };

  addOne = () => {
    this.state.count += 1;

    this.setState((prevState: State) => {
      return {
        count: prevState.count,
      };
    });
  };

  add100 = () => {
    this.state.count += 100;

    this.setState((prevState: State) => {
      return {
        count: prevState.count,
      };
    });
  };

  increase = () => {
    this.addOne();

    if ((this.state.count - 1) % 5 === 0) {
      this.add100();
    }

    this.setState((prevState: State) => {
      return {
        count: prevState.count,
      };
    });
  };

  render() {
    const { count } = this.state;
    const { addOne, add100, increase } = this;

    return (
      <div className="Counter">
        <h1 className="Counter__title">
          {`Count: ${count}`}
        </h1>
        <div className="Counter__buttons">
          <Button
            action={addOne}
            text="Add 1"
          />
          <Button
            action={add100}
            text="Add 100"
          />
          <Button
            action={increase}
            text="Increase"
          />
        </div>
      </div>
    );
  }
}
