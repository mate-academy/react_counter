import React from 'react';
import './App.scss';

type State = {
  counter: number,
};

class App extends React.Component<{}, State> {
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
    this.setState(prevState => {
      this.addOne();

      if (!(prevState.counter % 5)) {
        this.add100();
      }
    });
  };

  render() {
    return (
      <>
        <h1>{`Count: ${this.state.counter}`}</h1>
        <button type="button" onClick={this.addOne}>Add one</button>
        <button type="button" onClick={this.add100}>Add 100</button>
        <button type="button" onClick={this.increase}>Mixed increase</button>
      </>
    );
  }
}

export default App;
