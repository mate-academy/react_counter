import React from 'react';
import './App.scss';

type State = {
  amount: number,
};

class App extends React.Component<{}, State> {
  state = {
    amount: 0,
  };

  addOne = () => {
    this.setState((state) => ({
      amount: state.amount + 1,
    }));
  };

  add100 = () => {
    this.setState((state) => ({
      amount: state.amount + 100,
    }));
  };

  increase = () => {
    this.addOne();

    if (this.state.amount % 5 === 0) {
      this.add100();
    }
  };

  render() {
    const { amount } = this.state;

    return (
      <>
        <h1>
          {'Count: '}
          {amount}
        </h1>

        <button
          type="button"
          onClick={() => this.addOne()}
        >
          Add 1
        </button>

        <button
          type="button"
          onClick={() => this.add100()}
        >
          Add 100
        </button>

        <button
          type="button"
          onClick={() => this.increase()}
        >
          Add 1 and 100
        </button>
      </>
    );
  }
}

export default App;
