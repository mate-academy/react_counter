import React from 'react';
import './App.scss';

type StateType = {
  counter: number
};

class App extends React.Component<{}, StateType> {
  state = {
    counter: 0,
  };

  addOne = () => (this.setState((state) => ({ counter: state.counter + 1 })))

  add100 = () => (this.setState((state) => ({ counter: state.counter + 100 })))

  increase = (): void => {
    if (this.state.counter % 5 === 0) {
      this.add100();
    }

    this.addOne();
  }

  render() {
    return (
      <>
        <h1 className="counter">
          Count:
          {this.state.counter}
        </h1>
        <button
          type="button"
          className="button button--add1"
          onClick={() => this.addOne()}
        >
          Add 1
        </button>
        <button
          type="button"
          className="button button--add100"
          onClick={() => this.add100()}
        >
          Add 100
        </button>
        <button
          type="button"
          className="button button--increase"
          onClick={() => this.setState(() => this.increase())}
        >
          Increase
        </button>
      </>
    );
  }
}

export default App;
