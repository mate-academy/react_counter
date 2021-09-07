import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

type State = {
  count: number;
};

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

  increase = () => {
    if (!(this.state.count % 5)) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    return (
      <div className="w-25 mx-auto pt-5">
        <h1 className="text-center display-5">
          Count: $
          {this.state.count}
        </h1>

        <div className="d-flex justify-content-center">
          <button
            type="button"
            className="btn btn-info text-light"
            onClick={this.addOne}
          >
            Add 1
          </button>

          <button
            type="button"
            className="btn btn-info text-light mx-2"
            onClick={this.add100}
          >
            Add 100
          </button>

          <button
            type="button"
            className="btn btn-info text-light"
            onClick={this.increase}
          >
            Increase
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
