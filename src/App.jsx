import React from 'react';
import './App.scss';
import { Counter } from './Components/Counter';
import { Button } from './Components/Button';

class App extends React.Component {
  state = {
    count: 0,
  }

  addOne = () => {
    this.setState(({ count }) => ({
      count: count + 1,
    }));
  };

  increase = () => {
    this.addOne();

    if (this.state.count % 5 === 0 && this.state.count > 0) {
      this.add100();
    }
  }

  add100 = () => {
    this.setState(({ count }) => ({
      count: count + 100,
    }));
  };

  render() {
    const { addOne, add100, increase } = this;

    return (
      <>
        <Counter
          count={this.state.count}
        />
        <Button
          addOne={addOne}
          add100={add100}
          increase={increase}
        />
      </>
    );
  }
}

export default App;
