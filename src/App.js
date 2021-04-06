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

  addHunred = () => {
    this.setState(prevState => ({
      count: prevState.count + 100,
    }));
  };

  increase = () => {
    const { count } = this.state;

    if (count % 5 === 0) {
      this.addHunred();
    }

    this.addOne();
  };

  render() {
    const { count } = this.state;

    return (
      <div className="container">
        <h1 className="text-center m-5">
          Count:
          {count}
        </h1>
        <div className="btn-group d-flex justify-content-center">
          <button
            type="button"
            className="btn rounded btn-danger m-2"
            onClick={this.addOne}
          >
            Add 1
          </button>
          <button
            type="button"
            className="btn rounded btn-success m-2"
            onClick={this.addHunred}
          >
            Add 100
          </button>
          <button
            type="button"
            className="btn rounded btn-warning m-2"
            onClick={this.increase}
          >
            Increase
          </button>
        </div>
      </div>
    );
  }
}
