import React from 'react';
import './App.scss';
import { Button } from './components/Button';

type State = {
  count: number;
};

class App extends React.Component<{}, State> {
  state = {
    count: 0,
  };

  addOne = () => {
    this.setState(({ count }) => ({ count: count + 1 }));
  };

  add100 = () => {
    this.setState(({ count }) => ({ count: count + 100 }));
  };

  increase = () => {
    this.addOne();

    if (this.state.count % 5 === 0) {
      this.add100();
    }
  };

  reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <>
        <h1>{`Count: ${this.state.count}`}</h1>
        <Button name="Add one" clickHandler={this.addOne} />
        <Button name="Add 100" clickHandler={this.add100} />
        <Button name="Increase" clickHandler={this.increase} />
        <Button name="Reset" clickHandler={this.reset} />
      </>
    );
  }
}

export default App;
