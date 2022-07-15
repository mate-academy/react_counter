import React from 'react';
import './App.scss';

interface State {
  count: number;
}

class App extends React.Component {
  state: State = {
    count: 0,
  };

  addOne = () => {
    this.setState((prev: State) => {
      return {
        count: prev.count + 1,
      };
    });
  };

  add100 = () => {
    this.setState((prev: State) => {
      return {
        count: prev.count + 100,
      };
    });
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
        <h1>{count}</h1>

        <div className="button__block">
          <button
            onClick={() => {
              this.addOne();
            }}
            type="button"
          >
            Add 1
          </button>

          <button
            onClick={() => {
              this.add100();
            }}
            type="button"
          >
            Add 100
          </button>

          <button
            onClick={() => {
              this.increase();
            }}
            type="button"
          >
            Increase
          </button>
        </div>
      </div>
    );
  }
}

export default App;
