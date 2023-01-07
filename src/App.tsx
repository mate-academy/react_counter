import React from 'react';
import './App.scss';

import 'bulma';

type State = {
  count: number,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    count: 0,
  };

  addOne = () => {
    this.setState(({ count }) => ({
      count: count + 1,
    }));
  };

  add100 = () => {
    this.setState(({ count }) => ({
      count: count + 100,
    }));
  };

  // DON'T change the code below
  increase = () => {
    this.addOne();

    if (this.state.count % 5 === 0) {
      this.add100();
    }
  };

  render() {
    const { count } = this.state;

    return (
      <div className="App">
        <h1 className="App__title title">
          {`Count: ${count}`}
        </h1>

        <div className="App__actions">
          <button
            type="button"
            className="App__add-one button is-primary"
            onClick={this.addOne}
          >
            Add 1
          </button>
          <button
            type="button"
            className="App__add-100 button is-primary"
            onClick={this.add100}
          >
            Add 100
          </button>
          <button
            type="button"
            className="App__increase button is-primary"
            onClick={this.increase}
          >
            Increase
          </button>
        </div>
      </div>
    );
  }
}
