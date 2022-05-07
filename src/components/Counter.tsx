import React from 'react';
import './Counter.scss';

interface State {
  count: number;
}

class Counter extends React.Component<{}, State> {
  state: State = {
    count: 0,
  };

  addOne = () => {
    this.setState((state) => ({ count: state.count + 1 }));
  };

  add100 = () => {
    this.setState((state) => ({ count: state.count + 100 }));
  };

  increase = () => {
    if (this.state.count % 5 === 0) {
      this.add100();
    } else {
      this.addOne();
    }
  };

  render() {
    const { count } = this.state;

    return (
      <>
        <h1 className="counter-title">
          Count:
          {' '}
          {count}
        </h1>
        <div className="wrapper">
          <button type="button" className="button-add" onClick={this.addOne}>
            First button
          </button>
          <button
            type="button"
            className="button-add"
            onClick={this.add100}
          >
            Second button
          </button>
          <button
            type="button"
            className="button-add"
            onClick={this.increase}
          >
            Third button
          </button>
        </div>
      </>
    );
  }
}

export default Counter;
