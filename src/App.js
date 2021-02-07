import React from 'react';
import './App.scss';

class App extends React.Component {
  state = {
    count: 0,
  };

  addOne = () => {
    this.setState(state => ({
      count: state.count + 1,
    }));
  };

  add100 = () => {
    this.setState(state => ({
      count: state.count + 100,
    }));
  };

  increase = () => {
    if (this.state.count % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    const { count } = this.state;

    return (
      <>
        <div className="wrapper">
          <h1 className="header">
            Count:
            {count}
          </h1>

          <button
            type="button"
            className="counter"
            onClick={this.addOne}
          >
            Add 1
          </button>

          <button
            type="button"
            className="counter"
            onClick={this.add100}
          >
            Add 100
          </button>

          <button
            type="button"
            className="counter"
            onClick={this.increase}
          >
            Special button *
          </button>

          <p className="note">
            *Special button add 100 if count is divisible by 5 and then add 1.
          </p>
        </div>
      </>
    );
  }
}

export default App;
