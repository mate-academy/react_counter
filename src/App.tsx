import React from 'react';
import './App.scss';

type Props = {
  num: number;
};

class App extends React.Component<{}, Props> {
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
    if (this.state.num % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    const { num } = this.state;

    return (
      <>
        <h1>
          Count:
          {' '}
          {num}
        </h1>

        <button
          type="button"
          onClick={this.addOne}
        >
          Add 1
        </button>

        <button
          type="button"
          onClick={this.add100}
        >
          Add 100
        </button>

        <button
          type="button"
          onClick={this.increase}
        >
          Increase
        </button>
      </>
    );
  }
}

export default App;
