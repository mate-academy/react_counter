import React from 'react';
import './App.scss';

type State = {
  count: number,
};

class App extends React.Component {
  state: State = {
    count: 0,
  };

  addOne = () => {
    this.setState((state: State) => ({ count: state.count + 1 }));
  };

  add100 = () => {
    this.setState((state: State) => ({ count: state.count + 100 }));
  };

  increase = () => {
    if (this.state.count % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    return (
      <>
        <h1>
          Count:
          {this.state.count}
        </h1>
        <button
          type="button"
          className="button"
          onClick={this.addOne}
        >
          Add one
        </button>
        <button
          type="button"
          className="button"
          onClick={this.add100}
        >
          Add 100
        </button>
        <button
          type="button"
          className="button"
          onClick={this.increase}
        >
          Increase
        </button>
      </>
    );
  }
}

export default App;
