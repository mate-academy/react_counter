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

  increase = () => {
    this.addOne();

    if (this.state.count % 5 === 0) {
      this.add100();
    }
  };

  render() {
    const { count } = this.state;

    return (
      <div className="App has-background-primary-light">
        <div className="viewHeight is-flex is-justify-content-center
        is-align-items-center is-flex-direction-column"
        >
          <h1 className="App__title mb-4 is-size-2 has-text-link">
            {`Count: ${count}`}
          </h1>
          <div className="buttons">
            <button
              type="button"
              className="App__add-one button is-primary is-rounded"
              onClick={this.addOne}
            >
              Add 1
            </button>

            <button
              type="button"
              className="App__add-100 button is-info is-rounded"
              onClick={this.add100}
            >
              Add 100
            </button>

            <button
              type="button"
              className="App__increase button is-warning is-rounded"
              onClick={this.increase}
            >
              Increase
            </button>
          </div>
        </div>
      </div>
    );
  }
}
