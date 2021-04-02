import React from 'react';
import './App.scss';

class App extends React.Component {
  state = {
    counter: 0,
  }

  addOne = () => {
    this.setState(state => ({
      counter: state.counter + 1,
    }));
  };

  add100 = () => {
    this.setState(state => ({
      counter: state.counter + 100,
    }));
  };

  increase = () => {
    if (this.state.counter % 5 === 0 && this.state.counter !== 0) {
      this.addOne();
      this.add100();
    } else {
      this.addOne();
    }
  };

  reset = () => {
    this.setState({
      counter: 0,
    });
  };

  render() {
    return (
      <>
        <div className="counter">
          <h1 className="title">
            Count:&nbsp;
            {this.state.counter}
          </h1>
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.addOne}
          >
            +1
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.add100}
          >
            +100
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.increase}
          >
            Increase
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.reset}
          >
            Reset
          </button>
        </div>
      </>
    );
  }
}

export default App;
