import React from 'react';
import './App.scss';
import { Counter } from './Counter';

class App extends React.Component {
  state = {
    counter: 0,
  }

  addOne = (func) => {
    this.setState(prevState => ({ counter: prevState.counter + 1 }), func);
  };

  add100 = () => {
    this.setState(prevState => ({ counter: prevState.counter + 100 }));
  };

  increase = () => {
    if (this.state.counter % 5 === 0) {
      return this.addOne(this.add100);
    }

    return this.addOne();
  }

  render() {
    return (
      <Counter
        addOne={this.addOne}
        add100={this.add100}
        increase={this.increase}
        counter={this.state.counter}
      />

    );
  }
}

export default App;
