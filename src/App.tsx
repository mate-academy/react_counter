import React from 'react';
import './App.scss';

interface State {
  count: number;
}

class App extends React.Component<{}, State> {
  state = {
    count: 0,
  };

  addOne = () => {
    this.setState((num) => ({
      count: num.count + 1,
    }));
  };

  add100 = () => {
    this.setState((num) => ({
      count: num.count + 100,
    }));
  };

  increase = () => {
    if (this.state.count % 5 === 0 && this.state.count !== 0) {
      this.add100();
    } else {
      this.addOne();
    }
  };

  render() {
    const { count } = this.state;

    return (
      <>
        <h1>
          Count:
          {' '}
          {count}
        </h1>

        <button
          type="button"
          onClick={this.addOne}
          className="button"
        >
          Add one
        </button>

        <button
          type="button"
          onClick={this.add100}
          className="button"
        >
          Add 100
        </button>

        <button
          type="button"
          onClick={this.increase}
          className="button"
        >
          Add increase
        </button>
      </>
    );
  }
}

export default App;
