import React from 'react';
import './App.scss';

class App extends React.Component {
  state = {
    count: 0,
  }

  addOne = () => {
    this.setState(state => ({
      count: state.count + 1,
    }));
  };

  add100 = () => {
    this.setState(state => ({
      count: state.count + 100,
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
      <div className="card w-25 m-auto">
        <h1 className="card-header text-center">
          {
            `Count: ${count}`
          }
        </h1>

        <div className="mt-4 d-flex justify-content-around">
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.addOne}
          >
            Add 1
          </button>

          <button
            type="button"
            onClick={this.add100}
            className="btn btn-success"
          >
            Add 100
          </button>

          <button
            type="button"
            onClick={this.increase}
            className="btn btn-warning"
          >
            Increase
          </button>
        </div>
      </div>
    );
  }
}

export default App;
