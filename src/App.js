import React from 'react';
import './App.scss';
import { Button } from './components/Button';

class App extends React.Component {
  state = {
    counter: 0,
  }

  addOne = () => {
    this.setState(state => ({
      counter: state.counter + 1,
    }));
  };

  add100 = () => {
    this.setState(state => ({
      counter: state.counter + 100,
    }));
  };

  increase = () => {
    this.addOne();
    if (this.state.counter % 5 === 0) {
      this.add100();
    }
  };

  render() {
    return (
      <div className="container">
        <h1 className="title">{this.state.counter}</h1>
        <div className="buttons">
          <Button text="add one" callback={this.addOne} />
          <Button text="add 100" callback={this.add100} />
          <Button text="increase" callback={this.increase} />
        </div>
      </div>
    );
  }
}

export default App;
