import React from 'react';
import './App.scss';
import { Counter } from './components/Counter';

class App extends React.Component {
  state = {
    counter: 0,
  }

  addOne = () => {
    this.setState(state => ({ counter: state.counter + 1 }));
  };

  add100 = () => {
    this.setState(state => ({ counter: state.counter + 100 }));
  };

  increase = () => {
    if (this.state.counter % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    return (
      <>
        <h1>
          Count:
          {this.state.counter}
        </h1>
        <Counter
          addOne={this.addOne}
          add100={this.add100}
          increase={this.increase}
        />
      </>
    );
  }
}

export default App;
