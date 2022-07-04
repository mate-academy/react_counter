import React from 'react';
import { State } from './react-app-env';

import './App.scss';

class App extends React.Component<{}, State> {
  state = {
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
    const { addOne, add100, increase } = this;

    return (
      <div className="container">
        <h1 className="container__title">{`Count: ${count}`}</h1>

        <div
          className="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button
            className="btn btn-outline-primary"
            type="button"
            onClick={addOne}
          >
            Add 1
          </button>

          <button
            className="btn btn-outline-primary"
            type="button"
            onClick={add100}
          >
            Add 100
          </button>

          <button
            className="btn btn-outline-primary"
            type="button"
            onClick={increase}
          >
            Increase
          </button>
        </div>
      </div>
    );
  }
}

export default App;
