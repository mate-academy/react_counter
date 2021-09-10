import React from 'react';

type State = {
  count: number;
};

export class Counter extends React.Component<{}, State> {
  state = {
    count: 0,
  };

  addOne = () => {
    this.setState(prevstate => ({
      count: prevstate.count + 1,
    }));
  };

  add100 = () => {
    this.setState(prevstate => ({
      count: prevstate.count + 100,
    }));
  };

  increase = () => {
    this.addOne();
    if (this.state.count % 5 === 0) {
      this.add100();
    }
  };

  render() {
    const { count } = this.state;

    return (
      <div className="align-middle">
        <h1 className="text-center mb-5">
          {'Count: '}
          {count}
        </h1>
        <div className="container">
          <button
            type="button"
            onClick={this.addOne}
            className="btn btn-primary me-3"
          >
            Add 1
          </button>
          <button
            type="button"
            onClick={this.add100}
            className="btn btn-primary me-3"
          >
            Add 100
          </button>
          <button
            type="button"
            onClick={this.increase}
            className="btn btn-primary"
          >
            Increase
          </button>
        </div>
      </div>
    );
  }
}
