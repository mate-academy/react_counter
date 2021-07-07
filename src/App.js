import React from 'react';
import './App.scss';
import { Counter } from './components/Counter/Counter';

class App extends React.Component {
  state = {
    count: 0,
  }

  addOne = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  };

  add100 = () => {
    this.setState(prevState => ({ count: prevState.count + 100 }));
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
      <>
        <Counter
          count={count}
          addOne={this.addOne}
          add100={this.add100}
          increase={this.increase}
        />
      </>
    );
  }
}

export default App;
