import React from 'react';
import './App.scss';

class App extends React.Component {
  state = {
    counter: 0,
  }

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
    if (this.state.counter % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    return (
      <>
        <h1>
          Count:
          {this.state.counter}
        </h1>
        <button type="button" onClick={this.addOne}>
          Increase by 1
        </button>
        <button type="button" onClick={this.add100}>
          Increase by 100
        </button>
        <button type="button" onClick={this.increase}>
          Increase by condition
        </button>
      </>
    );
  }
}

export default App;
