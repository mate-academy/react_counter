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
    this.addOne();

    if (this.state.count % 5 === 0) {
      this.add100();
    }
  };

  render() {
    const { count } = this.state;
    const message = `Count: ${count}`;

    return (
      <div className="counter">
        <h1>{message}</h1>
        <div className="container">
          <button type="button" onClick={this.addOne}>
            Add one
          </button>

          <button type="button" onClick={this.add100}>
            Аdd 100
          </button>

          <button type="button" onClick={this.increase}>
            Increase
          </button>
        </div>
      </div>
    );
  }
}

export default App;
