import React from 'react';
import './App.scss';
import 'bulma/css/bulma.css';

type State = {
  count: number,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
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
      <div className="
        is-flex is-flex-direction-column is-align-items-center
        is-fullheight is-justify-content-center"
      >
        <h1 className="App__title subtitle">
          {`Count: ${count}`}
        </h1>

        <div className="
          column is-6
          is-flex is-justify-content-space-evenly"
        >
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
