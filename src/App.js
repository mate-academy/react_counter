import React from 'react';
import './App.scss';

class App extends React.Component {
  state = {
    count: 0,
  }

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
    this.setState(state => ({
      count: state.count + 101,
    }));
  };

  render() {
    const { count } = this.state;

    return (
      <>
        <h1>
          Count:
          {count}
        </h1>
        <button
          type="button"
          onClick={this.addOne}
        >
          Add 1
        </button>

        <button
          type="button"
          onClick={this.add100}
        >
          Add 100
        </button>

        <button
          type="button"
          onClick={
            count % 10 !== 5
              && count % 10 !== 0
              ? this.addOne
              : this.increase
          }
        >
          Add some special value
        </button>
      </>
    );
  }
}

export default App;
