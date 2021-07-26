import React from 'react';
import './App.scss';

class App extends React.Component {
  state = {
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
      this.addOne();
    } else {
      this.addOne();
    }
  };

  render() {
    return (
      <div className="App border
       border-success
        rounded-pill
         position-absolute
          top-50 start-50
           translate-middle"
      >
        <h1 className="App__title">
          Count:
          {this.state.count}
        </h1>
        <div
          className="App__buttons btn-group"
          role="group"
          aria-label="Basic outlined example"
        >
          <button
            type="button"
            className="btn btn-success"
            onClick={this.addOne}
          >
            Add One
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={this.add100}
          >
            Add 100
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={this.increase}
          >
            Increase
          </button>
        </div>
      </div>
    );
  }
}

export default App;
