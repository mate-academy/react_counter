import React from 'react';
import './App.scss';

type State = {
  counter: number,
};

class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    counter: 0,
  };

  addOne = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  add100 = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 100,
    }));
  };

  increase = () => {
    const { counter } = this.state;

    if ((counter % 5) === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    const { counter } = this.state;

    return (
      <div className="card card-content">
        <h1 className="title is-1">
          {`Count: ${counter}`}
        </h1>

        <div className="card-footer">
          <button
            type="button"
            className="button is-dark"
            onClick={this.addOne}
          >
            Add 1
          </button>
          <button
            type="button"
            className="button is-dark"
            onClick={this.add100}
          >
            Add 100
          </button>
          <button
            type="button"
            className="button is-dark"
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
