import React from 'react';
import './Counter.scss';

interface State {
  count: number;
}

export class Counter extends React.Component<{}, State> {
  state: State = {
    count: 0,
  };

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
    this.setState(state => {
      if (state.count % 5 === 0) {
        return {
          count: state.count + 101,
        };
      }

      return {
        count: state.count + 1,
      };
    });
  };

  render() {
    return (
      <div>
        <h1 className="title">
          {`value is ${this.state.count}`}
        </h1>
        <button type="button" onClick={this.addOne} className="button">Add 1</button>
        <button type="button" onClick={this.add100} className="button">Add 100</button>
        <button type="button" onClick={this.increase} className="button">Increase</button>
      </div>
    );
  }
}
