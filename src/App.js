import React from 'react';
import './App.scss';
import { Counter } from './Componetns/Counter';

class App extends React.Component {
  state = {
    value: 0,
  }

  addOne = () => {
    this.setState(state => ({
      value: state.value + 1,
    }));
  };

  add100 = () => {
    this.setState(state => ({
      value: state.value + 100,
    }));
  };

  increase = () => {
    if (this.state.value % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    const { addOne, add100, increase } = this;

    return (
      <Counter
        value={this.state.value}
        add100={add100}
        addOne={addOne}
        increase={increase}
      />
    );
  }
}

export default App;
