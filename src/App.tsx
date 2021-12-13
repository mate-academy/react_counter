import React from 'react';
import './App.scss';

type State = {
  counter: number,
};

class App extends React.Component<{}, State> {
  state = {
    counter: 0,
  };

  addOne = () => {
    this.setState(state => ({
      counter: state.counter + 1,
    }));
  };

  add100 = () => {
    this.setState(state => ({
      counter: state.counter + 100,
    }));
  };

  increase = () => {
    this.addOne();
    if (this.state.counter % 5 === 0) {
      this.add100();
    }
  };

  render() {
    return (
      <div className="App">
        <h1>
          Count:
          {this.state.counter}
        </h1>
        <div className="button__box">
          <button
            type="button"
            onClick={() => {
              this.add100();
            }}
          >
            Add 100
          </button>

          <button
            type="button"
            onClick={() => {
              this.addOne();
            }}
          >
            Add One
          </button>

          <button
            type="button"
            onClick={() => {
              this.increase();
            }}
          >
            Special Counter
          </button>

        </div>
      </div>
    );
  }
}

export default App;
