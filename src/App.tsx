import React from 'react';
import './App.scss';

type State = {
  num: number,
};

class App extends React.Component<{}, State> {
  state = {
    num: 0,
  };

  addOne = () => {
    this.setState((state) => ({
      num: state.num + 1,
    }));
  };

  add100 = () => {
    this.setState((state) => ({
      num: state.num + 100,
    }));
  };

  increase = () => {
    this.addOne();
    if (this.state.num % 5 === 0) {
      this.add100();
    }
  };

  render() {
    const { num } = this.state;

    return (
      <>
        <h1 className="title__count">
          Count:
          {' '}
          {num}
        </h1>

        <button
          type="button"
          className="button__count"
          onClick={this.addOne}
        >
          Add one!
        </button>

        <button
          type="button"
          className="button__count"
          onClick={this.add100}
        >
          Add one hundred!
        </button>

        <button
          type="button"
          className="button__count"
          onClick={this.increase}
        >
          Add increase!
        </button>
      </>
    );
  }
}

export default App;
