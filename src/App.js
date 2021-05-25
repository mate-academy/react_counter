import React from 'react';
import './App.scss';

class App extends React.Component {
  state = {
    counter: 0,
  }

  addOne = () => {
    this.setState(({ counter }) => ({
      counter: counter + 1,
    }));
  };

  add100 = () => {
    this.setState(({ counter }) => ({
      counter: counter + 100,
    }));
  };

  increase = () => {
    this.setState(({ counter }) => {
      if (!(counter % 5)) {
        this.add100();
      }

      this.addOne();
    });
  };

  render() {
    const { counter } = this.state;

    return (
      <div>
        <h1>
          Count:
          {counter}
        </h1>
        <button type="button" onClick={this.addOne}>adds 1</button>
        <button type="button" onClick={this.add100}>adds 100</button>
        <button type="button" onClick={this.increase}>button №3</button>
      </div>
    );
  }
}

export default App;
