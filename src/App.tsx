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
        <h1
          className="App__title"
        >
          Count:
          {count}
        </h1>

        <button
          type="button"
          onClick={this.addOne}
          className="App__button"
        >
          Click me for add 1
        </button>
        <button
          type="button"
          onClick={this.add100}
          className="App__button"
        >
          Click me for add 100
        </button>
        <button
          type="button"
          onClick={this.increase}
          className="App__button"
        >
          Click me five times to see something special
        </button>
      </div>
    );
  }
}

export default Counter;
