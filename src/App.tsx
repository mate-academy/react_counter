import React from 'react';
import './App.scss';

interface State {
  count: number,
}

export class App extends React.Component<{}, State> {
  state: State = {
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
      <div className="App">
        <h1 className="rainbow-animated">{`Count: ${this.state.count}`}</h1>
        <button
          className="button button--addOne"
          type="button"
          onClick={this.addOne}
        >
          addOne
        </button>

        <button
          className="button button--add100"
          type="button"
          onClick={this.add100}
        >
          add100
        </button>

        <button
          className="button button--increase"
          type="button"
          onClick={this.increase}
        >
          increase
        </button>
      </div>
    );
  }
}
