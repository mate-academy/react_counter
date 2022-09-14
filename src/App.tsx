import React from 'react';
import 'bulma/css/bulma.min.css';
import './App.scss';

type State = {
  count: number,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
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
    this.addOne();

    if (this.state.count % 5 === 0) {
      this.add100();
    }
  };

  reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    const { count } = this.state;

    return (
      <div className="App box has-text-centered">
        <h1 className="title has-text-info has-text-centered">
          {`Count: ${count}`}
        </h1>

        <button
          type="button"
          className="button mr-3 is-info"
          onClick={this.addOne}
        >
          Add 1
        </button>

        <button
          type="button"
          className="button mr-3 is-success"
          onClick={this.add100}
        >
          Add 100
        </button>

        <button
          type="button"
          className="button mr-3 is-warning"
          onClick={this.increase}
        >
          Increase
        </button>

        <button
          type="button"
          className="button is-danger"
          onClick={this.reset}
        >
          Reset
        </button>
      </div>
    );
  }
}
