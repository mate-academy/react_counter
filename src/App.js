import React from 'react';
import './App.scss';
import { Counter } from './components/Counter';

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

  increase = () => {};

  render() {
    return (
      <Counter
        add100={this.add100}
        count={this.state.count}
        addOne={this.addOne}
      />
    );
  }
}

export default App;
