import React from 'react';
import './App.scss';

class App extends React.Component {
  state = {
    count: 0,
  }

  addOne = () => {
    this.setState(({ count }) => ({
      count: count + 1,
    }));
  };

  increase = () => {
    this.addOne();

    if (this.state.count % 5 === 0 && this.state.count > 0) {
      this.add100();
    }
  }

  add100 = () => {
    this.setState(({ count }) => ({
      count: count + 100,
    }));
  };

  render() {
    return (
      <>
        <h1>
          Count:
          {this.state.count}
        </h1>
        <button
          onClick={() => this.addOne()}
          type="button"
        >
          add one
        </button>
        <button
          onClick={() => this.increase()}
          type="button"
        >
          increase
        </button>
        <button
          onClick={() => this.add100()}
          type="button"
        >
          add one hundred
        </button>
      </>
    );
  }
}

export default App;
