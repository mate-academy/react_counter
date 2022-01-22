import React from 'react';
import './App.scss';

type State = {
  count: number;
};

class App extends React.Component<{}, State> {
  state = {
    count: 0,
  };

  addOne = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  add100 = () => {
    this.setState((prevState) => ({
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

  render() {
    return (
      <>
        <h1>{`Count: ${this.state.count}`}</h1>
        <button
          type="button"
          onClick={this.addOne}
        >
          AddOne
        </button>
        <button
          type="button"
          onClick={this.add100}
        >
          Add100
        </button>
        <button
          type="button"
          onClick={this.increase}
        >
          Increase
        </button>
      </>
    );
  }
}

export default App;
