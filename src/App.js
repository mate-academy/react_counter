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

    this.addOne();
  };

  render() {
    return (
      <div className="App">
        <h1 className="App__counter">
          Count:
          {this.state.count}
        </h1>
        <div className="App__buttons">
          <button type="button" onClick={this.addOne}>add one</button>
          <button type="button" onClick={this.add100}>add 100</button>
          <button type="button" onClick={this.increase}>increase</button>
        </div>
      </div>
    );
  }
}

export default App;
