import React from 'react';
import './App.scss';

class App extends React.Component {
  state = {
    count: 0,
  }

  addOne = () => {
    this.setState(prevValue => ({
      count: prevValue.count + 1,
    }));
  };

  add100 = () => {
    this.setState(prevValue => ({
      count: prevValue.count + 100,
    }));
  };

  increase = () => {
    const { count } = this.state;

    this.addOne();

    if (count % 5 === 0) {
      this.add100();
    }
  };

  render() {
    return (
      <>
        <h1>
          Count:
          {' '}
          {this.state.count}
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
