import React from 'react';
import './App.scss';

type State = {
  count: number
};

class App extends React.Component<{}, State> {
  state = {
    count: 0,
  };

  increase = (increaseValue: number) => {
    this.setState((state) => ({ count: state.count + increaseValue }));
  };

  addOne = () => {
    this.increase(1);
  };

  add100 = () => {
    this.increase(100);
  };

  addByCondition = () => {
    this.addOne();
    if (this.state.count % 5 === 0) {
      this.add100();
    }
  };

  render() {
    const { count } = this.state;

    return (
      <div className="App">
        <h1>{`Count: ${count}`}</h1>
        <div>
          <button
            type="button"
            onClick={this.addOne}
          >
            Add one
          </button>
          <button
            type="button"
            onClick={this.add100}
          >
            Add 100
          </button>
          <button
            type="button"
            onClick={this.addByCondition}
          >
            Add by condition
          </button>
        </div>
      </div>
    );
  }
}

export default App;
