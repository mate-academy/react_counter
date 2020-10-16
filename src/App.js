import React from 'react';
import './App.scss';

class App extends React.Component {
  state = {
    count: 0,
  }
  addOne = () => {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  };

  add100 = () => {
    this.setState((state) => ({
      count: state.count + 100,
    }));
  };

  increase = () => {
    if (this.state.count % 5 === 0) {
     this.add100()
    }
    this.addOne()
  };

  render() {
    let { count } = this.state;
    return (
      <>
        <h1>Count:
          <b>{count}</b>  
        </h1>
        <button className="first" type='button' onClick={this.addOne}>
          Add 1
        </button>
        <button className="second" type='button' onClick={this.add100}>
          Add 100
        </button>
        <button className="third" type='button' onClick={this.increase}>
          Secret Button
        </button>
      </>
    );
    
  }
}

export default App;
