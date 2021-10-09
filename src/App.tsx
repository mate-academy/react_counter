import React from 'react';
import './App.scss';

class App extends React.Component<{}, { count: number }> {
  state = {
    count: 0,
  };

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
      this.add100();
    }

    this.addOne();
  };

  render() {
    const { count } = this.state;

    return (
      <div className="container">
        <h1>{`Count: ${count}`}</h1>
        <div>
          <button className="button" type="button" onClick={this.addOne}>addOne</button>
          <button className="button" type="button" onClick={this.add100}>add100</button>
          <button className="button" type="button" onClick={this.increase}>increase</button>
        </div>
      </div>

    );
  }
}

export default App;
