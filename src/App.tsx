import React from 'react';
import './App.scss';

type State = {
  sum: number,
};

class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    sum: 0,
  };

  addOne = () => {
    this.setState((state) => {
      return {
        sum: state.sum + 1,
      };
    });
  };

  add100 = () => {
    this.setState((state) => {
      return {
        sum: state.sum + 100,
      };
    });
  };

  increase = () => {
    this.addOne();

    if (this.state.sum % 5 === 0) {
      this.add100();
    }
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1 className="title">
            Count:
            <span className="countSum">{` ${this.state.sum}`}</span>
          </h1>

          <div className="buttons">
            <button
              className="button"
              type="button"
              onClick={() => {
                this.addOne();
              }}
            >
              Add 1
            </button>

            <button
              className="button"
              type="button"
              onClick={() => {
                this.add100();
              }}
            >
              Add 100
            </button>

            <button
              className="button"
              type="button"
              onClick={() => {
                this.increase();
              }}
            >
              Increase
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
