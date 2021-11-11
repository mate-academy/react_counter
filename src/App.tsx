import React from 'react';
import './App.scss';

type Props = {};

interface State {
  age: number;
}

class App extends React.Component<Props, State> {
  state: State = {
    age: 0,
  };

  addOne = () => {
    this.setState((state) => ({
      age: state.age + 1,
    }));
  };

  add100 = () => {
    this.setState((state) => ({
      age: state.age + 100,
    }));
  };

  increase = () => {
    this.addOne();

    if (this.state.age % 5 === 0) {
      this.add100();
    }
  };

  render() {
    const { age } = this.state;

    return (
      <div>
        <h1>
          Count:
          {' '}
          {age}
        </h1>
        <button
          onClick={this.addOne}
          type="button"
        >
          Add 1
        </button>
        <button
          onClick={this.add100}
          type="button"
        >
          Add 100
        </button>
        <button
          onClick={this.increase}
          type="button"
        >
          Add 1 or 100
        </button>
      </div>
    );
  }
}

export default App;
