import React from 'react';
import './App.scss';

type State = {
  count: number
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
    if (!(this.state.count % 5)) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    return (
      <div className="counter">
        <h1 className="counter__title">
          Count:
          {' '}
          {this.state.count}
        </h1>

        <div className="counter__buttons-wrapper">
          <button
            className="counter__button"
            type="button"
            onClick={this.addOne}
          >
            +1
          </button>

          <button
            className="counter__button"
            type="button"
            onClick={this.add100}
          >
            +100
          </button>

          <button
            className="counter__button"
            type="button"
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
