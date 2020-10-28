import React from 'react';
import { Counter } from './component/Counter';
import './App.scss';

class App extends React.Component {
  state = {
    count: 0,
  };

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
    const { count } = this.state;

    return (
      <div>
        <Counter
          count={count}
          add100={this.add100}
          addOne={this.addOne}
          increase={this.increase}
        />
      </div>

    );
  }
}

export default App;
