import React from 'react';
import './App.scss';

class App extends React.Component {
  state = {
    number: 0,
  }

  addOne = () => {
    this.setState(state => ({ number: state.number + 1 }));
  };

  add100 = () => {
    this.setState(state => ({ number: state.number + 100 }));
  };

  increase = () => {
    if (this.state.number % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    return (
      <>
        <h1>
          Count:
          {this.state.number}
        </h1>
        <button type="button" onClick={this.addOne}>Add one</button>
        <button type="button" onClick={this.add100}>Add 100</button>
        <button type="button" onClick={this.increase}>Increase</button>
      </>
    );
  }
}

export default App;
