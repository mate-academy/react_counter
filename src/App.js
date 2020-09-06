import React from 'react';
import { Counter } from './Counter/Counter';
import './App.scss';

class App extends React.Component {
  state = {
    counter: 0,
  };

  addOne = () => {
    this.setState(state => ({
      counter: state.counter + 1,
    }));
  };

  add100 = () => {
    this.setState(state => ({
      counter: state.counter + 100,
    }));
  };

  increase = () => {
    const value = this.state.counter + 1;

    this.addOne();

    if (value % 5 === 0) {
      this.add100();
    }
  };

  render() {
    const { counter } = this.state;

    return (
      <section className="App">
        <Counter
          counter={counter}
          addOne={this.addOne}
          add100={this.add100}
          increase={this.increase}
        />
      </section>
    );
  }
}

export default App;
