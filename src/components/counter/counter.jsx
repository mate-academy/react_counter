import React from 'react';
import './counter.scss';

class Counter extends React.Component {
  state = {
    value: 0,
  }

  addOne = () => {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };

  add100 = () => {
    this.setState(prevState => ({
      value: prevState.value + 100,
    }));
  };

  increase = () => {
    this.addOne();
    if ((this.state.value % 5 === 0) && this.state.value) {
      this.add100();
    }
  };

  render() {
    const { value } = this.state;

    return (
      <div className="container">
        <h1 className="title">
          Count
          {' : '}
          {value}
        </h1>
        <div className="button-container">
          <button
            type="button"
            onClick={this.addOne}
            className="add-one"
          >
            Add One
          </button>
          <button
            type="button"
            onClick={this.add100}
            className="add-hundred"
          >
            Add 100
          </button>
          <button
            type="button"
            onClick={this.increase}
            className="add-something"
          >
            Add 100 affter 5
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
