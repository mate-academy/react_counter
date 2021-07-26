import React from 'react';
import './App.scss';
import { Counter } from './Counter';

class App extends React.Component {
  state = {
    count: 0,
  }

  addOne = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  };

  add100 = () => {
    this.setState(prevState => ({
      count: prevState.count + 100,
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
      <div className="app">
        <Counter
          count={this.state.count}
          addOne={this.addOne}
          addOneHundred={this.add100}
          increase={this.increase}
        />
      </div>

    );
  }
}

export default App;
