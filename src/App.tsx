import React from 'react';
import './App.scss';

type State = {
  count: number,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    count: 0,
  };

  // Fix addOne and add100 methods so they can work together
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

  // DON'T change the code below
  increase = () => {
    const { count } = this.state;

    this.addOne();

    if (count % 5 === 0) {
      this.add100();
    }
  };

  render() {
    const { count } = this.state;

    return (
      <div className="App card column is-one-third p-5 m-auto">
        <h1 className="App__title has-text-centered m-5 is-size-1">
          {`Count: ${count}`}
        </h1>

        <div className="is-flex is-justify-content-space-between">
          <button
            type="button"
            className="App__add-one button is-primary"
            onClick={this.addOne}
          >
            Add 1
          </button>

          <button
            type="button"
            className="App__add-100 button is-warning"
            onClick={this.add100}
          >
            Add 100
          </button>

          <button
            type="button"
            className="App__increase button is-danger"
            onClick={this.increase}
          >
            Increase
          </button>
        </div>
      </div>
    );
  }
}
