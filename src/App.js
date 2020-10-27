import React from 'react';
import './App.scss';
import { Counter } from './components/Counter';

class App extends React.Component {
  state = {
    count: 0,
  }

  addOne = () => {
    this.setState({
      count: this.state.count + 1,
    });
  }

  add100 = () => {
    this.setState({
      count: this.state.count + 100,
    });
  }

  increase = () => {
    if ((this.state.count + 1) % 5 === 0 && this.state.count !== 0) {
      this.add100();
    } else {
      this.addOne();
    }
  };


  render() {

    return (
      <Counter
        count={this.state.count}
        addOne={this.addOne}
        add100={this.add100}
        increase={this.increase}
      />
    );
  }
}

export default App;
