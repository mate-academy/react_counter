import React from 'react';
import './App.scss';

export class App extends React.Component {
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
    this.setState(prevState => ({
      count: (prevState.count % 5 !== 0 || prevState.count === 0)
        ? prevState.count + 1
        : prevState.count + 101,
    }));
  };

  reset = () => {
    this.setState({
      count: 0,
    });
  }

  render() {
    const { count } = this.state;

    return (
      <div className="counter">
        <h1 className="counter__heading">
          {`Count: ${count}`}
        </h1>
        <div className="counter__wrapper">
          <button
            className="counter__button"
            type="button"
            onClick={this.addOne}
          >
            Add one
          </button>
          <button
            className="counter__button"
            type="button"
            onClick={this.add100}
          >
            Add 100
          </button>
          <button
            className="counter__button"
            type="button"
            onClick={this.increase}
          >
            Increase
          </button>
          <button
            className="counter__button"
            type="button"
            onClick={this.reset}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}
