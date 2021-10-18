import { Component } from 'react';
import './App.scss';

type State = {
  count: number;
};

class Counter extends Component<{}, State> {
  state: State = {
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
    this.setState((state) => {
      if (state.count % 5 === 0) {
        this.add100();
      }

      this.addOne();
    });
  };

  render() {
    const { count } = this.state;

    return (
      <div className="App">
        <h1>
          Count:
          {count}
        </h1>

        <button
          type="button"
          onClick={this.addOne}
        >
          This button adds 1!
        </button>
        <button
          type="button"
          onClick={this.add100}
        >
          This button adds 100!
        </button>
        <button
          type="button"
          onClick={this.increase}
        >
          This button DONT just add 1!
        </button>
      </div>
    );
  }
}

export default Counter;
