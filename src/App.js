import React from 'react';
import './App.scss';

class App extends React.Component {
  state = {
    value: 0,
    count: 0,
    num: 1,
  }

  addOne = () => {
    this.setState(prevValue => ({
      value: prevValue.value + 1,
      num: prevValue.num + 1,
    }));

    if (this.state.num === 5) {
      this.setState(prevCount => ({
        num: 1,
        count: prevCount.count + 5,
      }));
    }
  };

  add100 = () => {
    this.setState(prevValue => ({
      value: prevValue.value + 100,
      count: prevValue.count + 100,
    }));
  };

  increase = () => {
    const { value, count } = this.state;

    this.addOne();

    if ((value / count) === 1) {
      this.add100();
    }
  };

  render() {
    return (
      <>
        <h1>
          Count:
          {' '}
          {this.state.value}
        </h1>

        <button
          type="button"
          onClick={this.addOne}
        >
          adds 1
        </button>

        <button
          type="button"
          onClick={this.add100}
        >
          adds 100
        </button>

        <button
          type="button"
          onClick={this.increase}
        >
          increaser
        </button>
      </>
    );
  }
}

export default App;
