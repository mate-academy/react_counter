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
    this.setState(prev => ({
      count: prev.count + 1,
    }));
  };

  add100 = () => {
    this.setState(prev => ({
      count: prev.count + 100,
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
      <div className="container">
        <h1>{`Count: ${this.state.count}`}</h1>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={this.addOne}
        >
          Add one
        </button>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={this.add100}
        >
          Add 100
        </button>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={this.increase}
        >
          Increase
        </button>
      </div>
    );
  }
}

export default App;
