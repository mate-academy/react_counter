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
    this.setState((currentState) => ({
      counter: currentState.counter + 1,
    }));
  };

  add100 = () => {
    this.setState((currentState) => ({
      counter: currentState.counter + 100,
    }));
  };

  increase = () => {
    this.setState((currentState) => {
      if (currentState.counter % 5 === 0 && currentState.counter > 0) {
        this.addOne();
        this.add100();
      } else {
        this.addOne();
      }
    });
  };

  clear = () => {
    this.setState({ counter: 0 });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1 className="title ml-5">
            {`Count: ${this.state.counter}`}
          </h1>
          <div className="level">
            <button
              className="
              button
              is-info
              is-outlined
              ml-5
              level-item
              "
              type="button"
              onClick={this.addOne}
            >
              Add 1
            </button>
            <button
              className="
              button
              is-info
              is-outlined
              ml-5
              level-item
              "
              type="button"
              onClick={this.add100}
            >
              Add 100
            </button>
            <button
              className="
              button
              is-info
              is-outlined
              ml-5
              level-item
              "
              type="button"
              onClick={this.increase}
            >
              Increase
            </button>
            <button
              className="
              button
              is-danger
              is-outlined
              ml-5
              level-item
              "
              type="button"
              onClick={this.clear}
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
