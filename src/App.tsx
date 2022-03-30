import React from 'react';
import './App.scss';

type State = {
  counter: number
};

class App extends React.Component<{}, State> {
  state = {
    counter: 0,
  };

  addOne = () => this.setState(state => ({
    ...state,
    counter: state.counter + 1,
  }));

  add100 = () => this.setState(state => ({
    ...state,
    counter: state.counter + 100,
  }));

  increase = () => {
    if (this.state.counter % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    return (
      <div className="counter">
        <h1>
          { 'Count: ' }
          {this.state.counter}
        </h1>
        <div className="counter__buttons">
          <button
            type="button"
            className="button"
            onClick={this.addOne}
          >
            Add 1
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
            Magic increment
          </button>
        </div>

      </div>
    );
  }
}

export default App;
