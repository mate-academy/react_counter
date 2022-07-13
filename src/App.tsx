import React from 'react';
import './App.scss';

type State = {
  count: number,
};

class App extends React.Component<{}, State> {
  state: State = {
    count: 0,
  };

  addOne = () => {
    this.setState((currentState) => ({
      count: currentState.count + 1,
    }));
  };

  add100 = () => {
    this.setState((current) => ({
      count: current.count + 100,
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

    return (
      <div className="counter">
        <h1 className="counter__title">
          {`Count: ${count}`}
        </h1>

        <div
          className="counter__buttons"
        >
          <button
            type="button"
            className="counter__button"
            onClick={this.addOne}
          >
            Add 1
          </button>

          <button
            type="button"
            className="counter__button"
            onClick={this.add100}
          >
            Add 100
          </button>

          <button
            type="button"
            className="counter__button"
            onClick={this.increase}
          >
            Increase
          </button>
        </div>
      </div>
    );
  }
}

export default App;
