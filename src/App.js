import React from 'react';
import { Counter } from './component/Counter';
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
    if (this.state.counter % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    const { counter } = this.state;

    return (
      <div>
        <Counter
          counter={counter}
          add100={this.add100}
          addOne={this.addOne}
          increase={this.increase}
        />
      </div>

    );
  }
}

export default App;
