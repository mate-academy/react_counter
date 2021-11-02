import React from 'react';
import './App.scss';

type State = {
  count: number;
};

class App extends React.Component<{}, State> {
  state: State = {
    count: 0,
  };

  addOne = () => {
    this.setState((state: State) => ({
      count: state.count + 1,
    }));
  };

  add100 = () => {
    this.setState((state: State) => ({
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
    const { count } = this.state;

    return (
      <div className="container">
        <h1>
          Count
          <br />
          {count}
        </h1>
        <div className="buttons">
          <button
            type="button"
            onClick={this.addOne}
          >
            Add 1
          </button>
          <button
            type="button"
            onClick={this.add100}
          >
            Add 100
          </button>
          <button
            type="button"
            onClick={this.increase}
          >
            Add 1, but if count is divisible by 5, it additionally calls add100.
          </button>
        </div>
      </div>
    );
  }
}

export default App;
