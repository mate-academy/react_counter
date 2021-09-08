import React from 'react';

interface State {
  count: number;
}

export class Counter extends React.Component<{}, State> {
  state = {
    count: 0,
  };

  addOne = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  };

  add100 = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 100,
      };
    });
  };

  increase = () => {
    if (this.state.count % 5 === 0) {
      this.setState((prevState) => {
        return {
          count: prevState.count + 100,
        };
      });
    }

    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  };

  render() {
    return (
      <div className="counter">
        <h1 className="counter__title">
          {`Count: ${this.state.count}`}
        </h1>
        <div className="counter__buttons">
          <button
            type="button"
            onClick={this.addOne}
            className="btn btn-outline-primary"
          >
            AddOne
          </button>
          <button
            type="button"
            onClick={this.add100}
            className="btn btn-outline-primary"
          >
            Add100
          </button>
          <button
            type="button"
            onClick={this.increase}
            className="btn btn-outline-primary"
          >
            Increase
          </button>
        </div>
      </div>
    );
  }
}
