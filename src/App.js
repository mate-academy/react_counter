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
  };

  render() {
    const { count } = this.state;

    return (
      <div className="container">
        <h1>{`Count: ${count}`}</h1>
        <button type="button" className="add1" onClick={this.addOne}>
          Add One
        </button>
        <button type="button" className="add100" onClick={this.add100}>
          Add 100
        </button>
        <button type="button" className="increase" onClick={this.increase}>
          Increase
        </button>
      </div>
    );
  }
}

export default App;
