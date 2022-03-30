import React from 'react';
import './App.scss';

interface State {
  count: number;
}

type Props = {};

class App extends React.Component<Props, State> {
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
    this.addOne();

    if (this.state.count % 5 === 0) {
      this.add100();
    }
  };

  render() {
    return (
      <>
        <h1>{`Count: ${this.state.count}`}</h1>
        <button
          type="button"
          onClick={this.addOne}
        >
          addOne
        </button>
        <button
          type="button"
          onClick={this.add100}
        >
          add100
        </button>
        <button
          type="button"
          onClick={this.increase}
        >
          {this.state.count % 5 === 0
            ? 'add100'
            : 'addOne'}
        </button>
      </>
    );
  }
}

export default App;
