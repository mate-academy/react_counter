import React from 'react';

type State = {
  count: number,
};

export class Count extends React.Component<{}, State> {
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
      this.addOne();
      this.add100();
    } else {
      this.addOne();
    }
  };

  render() {
    const { count } = this.state;

    return (
      <div className="has-text-centered mt-2">
        <h1 className="title is-3">{`Count: ${count}`}</h1>
        <button
          type="button"
          onClick={this.addOne}
          className="button is-link is-light mr-1"
        >
          Add 1
        </button>

        <button
          type="button"
          onClick={this.add100}
          className="button is-link is-light mr-1"
        >
          Add 100
        </button>

        <button
          type="button"
          onClick={this.increase}
          className="button is-link is-light"
        >
          Increase
        </button>
      </div>
    );
  }
}
