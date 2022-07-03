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
    this.setState((state) => ({
      counter: state.counter + 1,
    }));
  };

  add100 = () => {
    this.setState((state) => ({
      counter: state.counter + 100,
    }));
  };

  increase = () => {
    if (this.state.counter % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    return (
      <div className="container">
        <h1 className="title">
          Count:
          {' '}
          { this.state.counter }
        </h1>

        <button
          type="button"
          className="button"
          onClick={() => {
            this.addOne();
          }}
        >
          Add 1
        </button>

        <button
          type="button"
          className="button"
          onClick={() => {
            this.add100();
          }}
        >
          Add 100
        </button>

        <button
          type="button"
          className="button"
          onClick={() => {
            this.increase();
          }}
        >
          Increase
        </button>
      </div>
    );
  }
}

export default App;
