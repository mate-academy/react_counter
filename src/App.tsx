import React from 'react';
import './App.scss';

type State = {
  count: number,
};

class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    count: 0,
  };

  addOne = () => {
    this.setState(state => ({ count: state.count + 1 }));
  };

  add100 = () => {
    this.setState(state => ({ count: state.count + 100 }));
  };

  increase = () => {
    this.addOne();

    if (this.state.count % 5 === 0) {
      this.add100();
    }
  };

  render() {
    return (
      <div className="app">
        <h1 className="app__counter">{`Count: ${this.state.count}`}</h1>

        <div className="app__button-container">
          <button
            type="button"
            className="button"
            onClick={() => {
              this.addOne();
            }}
          >
            <strong>Add 1</strong>
          </button>

          <button
            type="button"
            className="button"
            onClick={() => {
              this.add100();
            }}
          >
            <strong>Add 100</strong>
          </button>

          <button
            type="button"
            className="button"
            onClick={() => {
              this.increase();
            }}
          >
            <strong>Increase</strong>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
