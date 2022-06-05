import React from 'react';
import './App.scss';

type State = {
  count: number,
};

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

  increase = () => (
    this.setState((state) => (
      state.count % 5 === 0
        ? { count: state.count + 101 }
        : { count: state.count + 1 }
    ))

  );

  render() {
    const { count } = this.state;

    return (
      <div className="app">
        <h1 className="card-header-title title is-4 is-centered">{`Count: ${count}`}</h1>
        <div className="is-centered card-footer-item">
          <button
            type="button"
            onClick={this.addOne}
            className="button is-link is-light"
          >
            Add 1
          </button>

          <button
            type="button"
            onClick={this.add100}
            className="button is-link is-light"
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

      </div>

    );
  }
}

export default App;
