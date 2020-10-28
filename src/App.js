import React from 'react';
import { Counter } from './component/Counter';
import './App.scss';

class App extends React.Component {
  state = {
    num: 0,
  }

  addOne = () => {
    this.setState(prevState => ({ num: prevState.num + 1 }));
  };

  add100 = () => {
    this.setState(prevState => ({ num: prevState.num + 100 }));
  };

  increase = () => {
    if (this.state.num % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    const { num } = this.state;

    return (
      <Counter
        num={num}
        addOne={this.addOne}
        add100={this.add100}
        increase={this.increase}
      />
    );
  }
}

export default App;
