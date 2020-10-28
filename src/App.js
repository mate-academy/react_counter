import React from 'react';
import './App.scss';
import { Button } from './components/button';

class App extends React.Component {
  state = {
    counter: 0,
  };

  addOne = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1,
    }));
  };

  add100 = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 100,
    }));
  };

  increase = () => {
    if ((this.state.counter % 5) === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    const { counter } = this.state;

    return (
      <div className="app">
        <h1>
          {`Count: ${counter}`}
        </h1>

        <Button clickHandler={this.addOne} text="Add 1" />
        <Button clickHandler={this.add100} text="Add 100" />
        <Button clickHandler={this.increase} text="Increase" />
      </div>
    );
  }
}

export default App;
