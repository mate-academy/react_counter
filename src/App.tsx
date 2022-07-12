import React from 'react';
import './App.scss';

type State = {
  count: number,
};
class App extends React.Component<{}, State> {
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
    return (
      <h1 className="title">
        Count:
        {' '}
        {this.state.count}
        <button
          className="button is-info is-light"
          type="button"
          onClick={this.addOne}
        >
          Add 1
        </button>
        <button
          className="button is-info is-light"
          type="button"
          onClick={this.add100}
        >
          Add 100
        </button>
        <button
          className="button is-info is-light"
          type="button"
          onClick={this.increase}
        >
          Increase
        </button>
      </h1>
    );
  }
}

export default App;
