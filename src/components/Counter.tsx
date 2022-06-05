import React from 'react';
import './Counter.scss';

interface State {
  count: number,
}

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
    const { count } = this.state;

    if (count % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    const { count } = this.state;

    return (
      <div className="box column is-half">
        <h1 className="title is-1">
          {`Count: ${count}`}
        </h1>

        <div className="btn-wrapper">
          <button
            type="button"
            className="btn button is-primary is-medium"
            onClick={this.addOne}
          >
            Add 1
          </button>
          <button
            type="button"
            className="btn button is-success is-medium"
            onClick={this.add100}
          >
            Add 100
          </button>
          <button
            type="button"
            className="btn button is-danger is-medium"
            onClick={this.increase}
          >
            Increase
          </button>
        </div>
      </div>
    );
  }
}
