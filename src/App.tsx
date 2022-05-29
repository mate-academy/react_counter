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

  increase = () => {
    if (this.state.count % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    const { count } = this.state;

    return (
      <div className="App">
        <h1>
          {`Count: ${count}`}
        </h1>

        <button
          type="button"
          className="btn"
          onClick={this.addOne}
        >
          Add 1
        </button>

        <button
          type="button"
          className="btn"
          onClick={this.add100}
        >
          Add 100
        </button>

        <button
          type="button"
          className="btn"
          onClick={this.increase}
        >
          Increase
        </button>
      </div>
    );
  }
}

export default App;
