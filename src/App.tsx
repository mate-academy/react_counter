import React from 'react';
import './App.scss';

type State = {
  number: number,
};

class App extends React.Component<{}, State> {
  state: State = {
    number: 0,
  };

  addOne = () => {
    this.setState(prevState => ({
      number: prevState.number + 1,
    }));
  };

  add100 = () => {
    this.setState(prevState => ({
      number: prevState.number + 100,
    }));
  };

  increase = () => {
    if (this.state.number % 5 === 0) {
      this.add100();
      this.addOne();
    } else {
      this.addOne();
    }
  };

  render() {
    return (
      <>
        <h1>
          Count:
          {' '}
          {this.state.number}
        </h1>
        <button type="button" onClick={this.addOne}>
          addOne
        </button>
        <button type="button" onClick={this.add100}>
          add100
        </button>
        <button type="button" onClick={this.increase}>
          increase
        </button>
      </>
    );
  }
}

export default App;
