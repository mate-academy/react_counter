import React from 'react';

type State = {
  count: number,
  clickCount: number,
};

class Counter extends React.Component<{}, State> {
  state = {
    count: 0,
    clickCount: 0,
  };

  addOne = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  add100 = () => {
    this.setState((prevState) => ({
      count: prevState.count + 100,
    }));
  };

  increase = () => {
    this.setState((prevState) => {
      if (prevState.clickCount === 5) {
        return {
          count: prevState.count + 101,
          clickCount: 0,
        };
      }

      return {
        count: prevState.count + 1,
        clickCount: prevState.clickCount + 1,
      };
    });
  };

  render() {
    const { count } = this.state;

    return (
      <div className="counter">
        <h1>
          {`Count: ${count}`}
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
          onClick={this.increase}
        >
          Third btn
        </button>
      </div>
    );
  }
}

export default Counter;
