import React from 'react';
import './App.scss';

class App extends React.Component {
  state = {
    count: 0,
  }

  addOne = () => {
    this.setState(({ count }) => ({ count: count + 1 }));
  };

  add100 = () => {
    this.setState(({ count }) => ({ count: count + 100 }));
  };

  increase = () => {
    if (!(this.state.count % 5)) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    return (
      <>
        <h1>
          {`Count: ${this.state.count}`}
        </h1>

        <button
          type="button"
          onClick={this.addOne}
        >
          + 1
        </button>

        <button
          type="button"
          onClick={this.add100}
        >
          + 100
        </button>

        <button
          type="button"
          onClick={this.increase}
        >
          MAGIC
        </button>
      </>
    );
  }
}

export default App;
