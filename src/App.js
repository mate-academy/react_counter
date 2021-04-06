import React from 'react';
import 'bootstrap/scss/bootstrap.scss';
import './App.scss';

export class App extends React.Component {
  state = {
    count: 0,
  }

  addOne = () => (
    this.setState(state => ({
      count: state.count + 1,
    }))
  );

  add100 = () => (
    this.setState(state => ({
      count: state.count + 100,
    }))
  );

  increase = () => {
    if (this.state.count % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    const { count } = this.state;

    return (
      <div className="counter">
        <h1 className="counter__title">
          {`Count: ${count}`}
        </h1>

        <div className="counter__buttons">
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.addOne}
          >
            <b>+ 1</b>
          </button>

          <button
            type="button"
            className="btn btn-primary"
            onClick={this.add100}
          >
            <b>+ 100</b>
          </button>

          <button
            type="button"
            className="btn btn-primary"
            onClick={this.increase}
          >
            <b>
              {count % 5 === 0
                ? '+ 101'
                : '+ 1'
              }
            </b>
          </button>
        </div>
      </div>
    );
  }
}
