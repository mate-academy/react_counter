import React from 'react';
import './App.scss';
import { Counter } from './components/Counter';

class App extends React.Component {
  state = {
    count: 0,
  }

  addOne = () => {
    this.setState(prevState => (
      { count: prevState.count + 1 }
    ));
  };

  add100 = () => {
    this.setState(prevState => (
      { count: prevState.count + 100 }
    ));
  };

  increase = () => {
    if (this.state.count % 5 === 0) {
      this.add100();
      this.addOne();
    } else {
      this.addOne();
    }
  };

  render() {
    const { addOne, add100, increase } = this;

    return (
      <Counter
        count={this.state.count}
        addOne={addOne}
        add100={add100}
        increase={increase}
      />
    );
  }
}

export default App;
