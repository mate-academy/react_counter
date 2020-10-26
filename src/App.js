import React from 'react';
import './App.scss';
import { Button } from './components/Button';
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

  increase = () => {
    this.setState((prevState) => {
      if (prevState.count % 5 === 0) {
        this.add100();
      }

      this.addOne();
    });
  };

  reset = () => {
    this.setState({
      count: 0,
    });
  }

  render() {
    const { count } = this.state;

    return (
      <>
        <Counter count={count} />
        <Button onClick={this.addOne} name="Add one" />
        <Button onClick={this.add100} name="Add 100" />
        <Button onClick={this.increase} name="Increase" />
        <Button onClick={this.reset} name="Reset" />
      </>
    );
  }
}

export default App;
