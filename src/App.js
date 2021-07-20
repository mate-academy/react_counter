import React from 'react';
import './App.scss';
import { Button } from './components/Button';

class App extends React.Component {
  state = {
    count: 0,
  }

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
    this.addOne();
    if (this.state.count % 5 === 0) {
      this.add100();
    }
  };

  render() {
    return (
      <>
        <h1>
          Count:
          {this.state.count}
        </h1>
        <Button action={this.addOne} text="Add 1" />
        <Button action={this.add100} text="Add 100" />
        <Button action={this.increase} text="increase" />
      </>
    );
  }
}

export default App;
