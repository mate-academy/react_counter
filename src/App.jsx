import React from 'react';
import './App.scss';

class App extends React.Component {
  state ={
    count: 0,
  }

  addOne = () => {
    this.setState(prevState => (
      {
        count: prevState.count + 1,
      }));
  };

  add100 = () => {
    this.setState(prevState => (
      {
        count: prevState.count + 100,
      }));
  };

  increase = () => {
    this.addOne();
    if (this.state.count % 5 === 0) {
      this.add100();
    }
  };

  render() {
    return (
      <>
        <h1>{`Count: ${this.state.count}`}</h1>
        <button
          type="button"
          onClick={this.addOne}
        >
          ADD 1
        </button>

        <button
          type="button"
          onClick={this.add100}
        >
          ADD 100
        </button>

        <button
          type="button"
          onClick={this.increase}
        >
          INCREASE
        </button>
      </>
    );
  }
}

export default App;
