import React from 'react';
import './App.scss';

type State = {
  counter: number;
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
    this.setState((state) => {
      if (state.counter % 5 === 0) {
        this.add100();
      }

      this.addOne();
    });
  };

  reset = () => {
    this.setState({
      counter: 0,
    });
  };

  render() {
    return (
      <div className="box has-text-centered mt-6">
        <h1 className="title is-size-3">{`Count: ${this.state.counter}`}</h1>
        <div className="columns">
          <div className="column">
            <button
              type="button"
              className="button is-responsive"
              onClick={this.addOne}
            >
              Add 1
            </button>
          </div>
          <div className="column">
            <button
              type="button"
              className="button is-responsive"
              onClick={this.add100}
            >
              Add 100
            </button>
          </div>
          <div className="column">
            <button
              type="button"
              className="button is-responsive"
              onClick={this.increase}
            >
              Increace
            </button>
          </div>
          <div className="column">
            <button
              type="button"
              className="button is-responsive"
              onClick={this.reset}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
