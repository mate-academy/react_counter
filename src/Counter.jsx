import React from 'react';

export class Counter extends React.Component {
  state = {
    num: 0,
  }

  addOne = () => {
    this.setState(prevState => ({
      num: prevState.num + 1,
    }));
  };

  addHundred = () => {
    this.setState(prevState => ({
      num: prevState.num + 100,
    }));
  };

  increase = () => {
    this.addOne();

    if (this.state.num % 5 === 0) {
      this.addHundred();
    }
  };

  clear = () => {
    this.setState({
      num: 0,
    });
  }

  render() {
    const { num } = this.state;

    return (
      <div className="App">
        <h1 className="App-title">
          {`Count: ${num}`}
        </h1>
        <button
          type="button"
          className="button"
          onClick={this.addOne}
        >
          +1
        </button>
        <button
          type="button"
          className="button"
          onClick={this.addHundred}
        >
          +100
        </button>
        <button
          type="button"
          className="button"
          onClick={this.increase}
        >
          Increase
        </button>
        <button
          type="button"
          className="button"
          onClick={this.clear}
        >
          Clear
        </button>
      </div>
    );
  }
}
