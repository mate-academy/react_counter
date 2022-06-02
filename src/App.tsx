import React from 'react';
import './App.scss';

interface State {
  x: number
}

class App extends React.Component<{}, State> {
  state = {
    x: 0,
  };

  addOne = () => {
    this.setState((prevState) => ({ x: prevState.x + 1 }));
  };

  add100 = () => {
    this.setState((prevState) => ({ x: prevState.x + 100 }));
  };

  increase = () => {
    this.addOne();

    if (this.state.x % 5 === 0) {
      this.add100();
    }
  };

  render() {
    const { x } = this.state;

    return (
      <div className="content has-text-centered mt-5">
        <h1>{`Count: ${x}`}</h1>
        <button
          className="button is-success is-outlined mr-5"
          type="button"
          onClick={this.addOne}
        >
          Add 1
        </button>

        <button
          className="button is-warning is-outlined mr-5"
          type="button"
          onClick={this.add100}
        >
          Add 100
        </button>
        <button
          className="button is-danger is-outlined"
          type="button"
          onClick={this.increase}
        >
          Increase
        </button>
      </div>
    );
  }
}

export default App;
