import React from 'react';
import './Counter.scss';

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
    this.setState(({ count }) => {
      this.addOne();
      if (count % 5 === 0 && count !== 0) {
        this.add100();
      }
    });
  };

  render() {
    const { count } = this.state;

    return (
      <>
        <h1>
          {`Count: ${count}`}
        </h1>
        <div className="add">
          <button
            type="button"
            className="add__button"
            onClick={this.addOne}
          >
            Add One
          </button>
          <button
            type="button"
            className="add__button"
            onClick={this.add100}
          >
            Add 100
          </button>
          <button
            type="button"
            className="add__button"
            onClick={this.increase}
          >
            Increise
          </button>
        </div>
      </>
    );
  }
}
