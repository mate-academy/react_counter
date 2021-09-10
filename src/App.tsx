import React from 'react';
import './App.scss';

type State = {
  count: number;
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

  increase = () => {
    if (this.state.count % 5 === 0) {
      this.add100();
    }
      this.addOne();
  };

  render() {
    return (
      <div className="container column">
        <h1 className="text-center">
          Count:
          {this.state.count}
        </h1>
        <div
          className="btn-group d-flex"
          role="group"
        >
          <button
            type="button"
            onClick={this.addOne}
            className="btn btn-secondary"
          >
            add 1
          </button>

          <button
            type="button"
            onClick={this.add100}
            className="btn btn-secondary"
          >
            add 100
          </button>

          <button
            type="button"
            onClick={this.increase}
            className="btn btn-secondary"
          >
            add 1 or 100
          </button>
        </div>
      </div>
    );
  }
}

export default App;
