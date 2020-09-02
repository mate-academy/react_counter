import React from 'react';

export class Counter extends React.Component {
  state = {
    counter: 0,
  }

  addOne = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1,
    }));
  }

  add100 = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 100,
    }));
  }

  divisibleby5 = () => {
    if (this.state.counter % 5 !== 0 || this.state.counter === 0) {
      this.addOne();
    }

    if (this.state.counter % 5 === 0) {
      this.add100();
      this.addOne();
    }
  }

  render() {
    return (
      <>
        {this.state.counter}
        <p>
          <button type="button" onClick={this.addOne}>+1</button>
          <button type="button" onClick={this.add100}>+100</button>
          <button type="button" onClick={this.divisibleby5}>
            divisible by 5
          </button>
        </p>
      </>
    );
  }
}
