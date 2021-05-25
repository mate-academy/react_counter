import React from 'react';
import './Counter.scss';

export class Counter extends React.Component {
  state = {
    count: 0,
    cklicks: 0,
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
    if (this.state.cklicks < 5 && this.state.cklicks !== 0) {
      this.setState(prevState => ({
        cklicks: prevState.cklicks + 1,
      }));
      this.addOne();
    } else {
      this.setState({
        cklicks: 1,
      });
      this.addOne();
      this.add100();
    }
  }

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
