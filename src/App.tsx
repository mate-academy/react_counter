import React from 'react';
import './App.scss';

type State = {
  counter: number,
};

class App extends React.Component<{}, State> {
  state: State = {
    counter: 0,
  };

  addOne = () => {
    this.setState((state) => ({
      counter: state.counter + 1,
    }));
  };

  add100 = () => {
    this.setState((state) => ({
      counter: state.counter + 100,
    }));
  };

  increase = () => {
    if (this.state.counter % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    return (
      <div className="card has-background-info-light">
        <h1 className="title is-3 tag is-warning is-light">
          Count:
          {' '}
          {this.state.counter}
        </h1>

        <div className="buttons">
          <button
            type="button"
            className="button is-primary is-focused"
            onClick={this.addOne}
          >
            Add 1
          </button>

          <button
            type="button"
            className="button is-success is-focused"
            onClick={this.add100}
          >
            Add 100
          </button>

          <button
            type="button"
            className="button is-info is-focused"
            onClick={this.increase}
          >
            Increase
          </button>
        </div>
        <span className="icon has-text-success">
          <i className="fas fa-check-square" />
        </span>
      </div>

    );
  }
}

export default App;
