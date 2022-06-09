import React from 'react';
import './App.scss';

type State = {
  counter: number,
};

class App extends React.Component<{}, State> {
  state = {
    counter: 0,
  };

  addOne = () => {
    this.setState((state) => ({ counter: state.counter + 1 }));
  };

  add100 = () => {
    this.setState((state) => ({ counter: state.counter + 100 }));
  };

  increase = () => {
    if (this.state.counter % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  clear = () => {
    this.setState({ counter: 0 });
  };

  render() {
    const { counter } = this.state;

    return (
      <div>
        <h1>
          Count:
          {' '}
          {counter}
        </h1>
        <div>
          <button
            type="button"
            onClick={this.addOne}
          >
            add 1
          </button>

          <button
            type="button"
            onClick={this.add100}
          >
            add 100
          </button>

          <button
            type="button"
            onClick={this.increase}
          >
            increase
          </button>

          <button
            type="button"
            onClick={this.clear}
          >
            clear
          </button>
        </div>
      </div>
    );
  }
}

export default App;
