import React from 'react';
import './App.scss';
import { Counter } from './components/Counter';

class App extends React.Component {
  state = {
    count: 0,
  }

  addOne = () => {
    this.setState(state => ({ count: state.count + 1 }));
  };

  add100 = () => {
    this.setState(state => ({ count: state.count + 100 }));
  };

  increase = () => {
    if (this.state.count % 5 === 0) {
      return this.add100() + this.addOne();
    }

    return this.addOne();
  };

  render() {
    return (
      <>
        <Counter
          addOne={this.addOne}
          add100={this.add100}
          increase={this.increase}
          {...this.state}
        />
      </>
    );
  }
}

export default App;
