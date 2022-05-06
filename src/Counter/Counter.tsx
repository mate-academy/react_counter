import React from 'react';
import './Counter.scss';

type State = {
  count: number;
};
export class Counter extends React.Component<{}, State> {
  state = {
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
    if (this.state.count % 5 !== 0) {
      this.addOne();
    } else {
      this.addOne();
      this.add100();
    }
  };

  render() {
    const { count } = this.state;

    return (
      <div className="Counter">
        <h1>
          Count:
          {' '}
          {count}
        </h1>
        <div className="Counter__buttons">
          <button type="button" className="Counter__button" onClick={this.addOne}>Add 1</button>
          <button type="button" className="Counter__button" onClick={this.add100}>Add 100</button>
          <button type="button" className="Counter__button" onClick={this.increase}>Add 1 or 100</button>
        </div>
      </div>

    );
  }
}
