import React from 'react';
import './App.scss';

class App extends React.Component {
  state = {
    counter: 0,
  };

  addOne = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1,
    }));
  };

  add100 = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 100,
    }));
  };

  increase = () => {
    this.addOne();
    if (!(this.state.counter % 5) && this.state.counter) {
      this.add100();
    }
  };

  reset = () => {
    this.setState(prevState => ({
      counter: 0,
    }));
  };

  render() {
    return (
      <>
        <div>
          <h1>
            Count:
            {this.state.counter}
          </h1>
          <button type="button" onClick={this.addOne}>
            Add 1
          </button>
          <button type="button" onClick={this.add100}>
            Add 100
          </button>
          <button type="button" onClick={this.increase}>
            Add ?
          </button>
        </div>
        <div>
          <button type="button" onClick={this.reset}>
            Reset
          </button>
        </div>
      </>
    );
  }
}

export default App;
