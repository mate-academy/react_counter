import React from 'react';
import './App.scss';

type State = {
  value: number;
};

class App extends React.Component<{}, State> {
  state = {
    value: 0,
  };

  addOne = () => {
    this.setState(({ value }) => ({
      value: value + 1,
    }));
  };

  add100 = () => {
    this.setState(({ value }) => ({
      value: value + 100,
    }));
  };

  increase = () => {
    const { value } = this.state;

    if (value % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  clear = () => this.setState({ value: 0 });

  render() {
    return (
      <div>
        <h1>{`Count: ${this.state.value}`}</h1>

        <button
          type="button"
          onClick={this.addOne}
        >
          Add ️1
        </button>

        <button
          type="button"
          onClick={this.add100}
        >
          Add &#x1F4AF;
        </button>

        <button
          type="button"
          onClick={this.increase}
        >
          Increase
        </button>

        <button
          type="button"
          onClick={this.clear}
        >
          Clear
        </button>
      </div>

    );
  }
}

export default App;
