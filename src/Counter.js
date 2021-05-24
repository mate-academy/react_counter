import React from 'react';

export class Counter extends React.Component {
  state = {
    count: 0,
  }

  addOne = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  };

  add100 = () => {
    this.setState(prevState => ({
      count: prevState.count + 100,
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
      <div className="App-box">
        <h1 className="title is-2">{`Count: ${count}`}</h1>
        <div className="button-box">
          <button
            type="button"
            onClick={this.addOne}
            className="button is-success is-light"
          >
            addOne
          </button>

          <button
            type="button"
            onClick={this.add100}
            className="button is-success is-light"
          >
            add100
          </button>

          <button
            type="button"
            onClick={this.increase}
            className="button is-success is-light"
          >
            divisible by 5
          </button>
        </div>
      </div>
    );
  }
}
