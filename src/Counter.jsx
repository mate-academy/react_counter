import React from 'react';

export class Counter extends React.Component {
  state = {
    count: 0,
  };

  addOne = () => {
    this.setState(state => ({
      count: state.count + 1,
    }));
  };

  addHundred = () => {
    this.setState(state => ({
      count: state.count + 100,
    }));
  };

  render() {
    const { count } = this.state;

    return (
      <div>
        <h1 className="header">
          {`Count: ${count}`}
        </h1>

        <button
          className="button"
          type="button"
          onClick={this.addOne}
        >
          Add 1
        </button>

        <button
          className="button"
          type="button"
          onClick={this.addHundred}
        >
          Add 100
        </button>

        <button
          className="button"
          type="button"
          onClick={() => {
            if (count % 5 === 0) {
              this.addHundred(this.state);
            }

            this.addOne(this.state);
          }}
        >
          Add 1 or 101
        </button>
      </div>
    );
  }
}
