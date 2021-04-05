import React from 'react';
import './App.scss';

class App extends React.Component {
  state ={
    count: 0,
  };

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
      <div className="block shadow p-3 mb-5 bg-body rounded">
        <h1 className="title">
          Count:
          {count}
        </h1>
        <button
          className="btn btn-primary"
          type="button"
          onClick={this.addOne}
        >
          Add One
        </button>
        <button
          className="btn btn-info"
          type="button"
          onClick={this.add100}
        >
          Add 100
        </button>
        <button
          className="btn btn-warning"
          type="button"
          onClick={this.increase}
        >
          Increase
        </button>
      </div>
    );
  }
}

export default App;
