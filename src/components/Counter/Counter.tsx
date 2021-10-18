import React from 'react';
import { Button } from '../Button';
import './Counter.scss';

interface State {
  count: number,
}

export class Counter extends React.Component<{}, State> {
  state: State = {
    count: 0,
  };

  addOne = () => {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  };

  add100 = () => {
    this.setState((state) => ({
      count: state.count + 100,
    }));
  };

  increase = (count: number) => {
    if (count % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  clear = () => {
    this.setState({ count: 0 });
  };

  render() {
    const { count } = this.state;

    return (
      <div className="Counter">
        <h1 className="Counter-Title">{`Count: ${count}`}</h1>
        <Button
          name="addOne"
          callback={this.addOne}
        />
        <Button
          name="add100"
          callback={this.add100}
        />
        <Button
          name="increase"
          callback={() => this.increase(count)}
        />
        <Button
          name="clear"
          callback={this.clear}
        />
      </div>
    );
  }
}
