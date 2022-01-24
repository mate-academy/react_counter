import React from 'react';
import './App.scss';

type State = {
  counter: number;
};

class App extends React.Component<{}, State> {
  state = {
    counter: 0,
  };

  addOne = () => {
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1,
      };
    });
  };

  add100 = () => {
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 100,
      };
    });
  };

  increase = () => {
    if (this.state.counter % 5 === 0) {
      this.add100();
    } else {
      this.addOne();
    }
  };

  render() {
    const { counter } = this.state;

    return (
      <div className="App">
        <h1>
          {`Count: ${counter}`}
        </h1>

        <button type="button" className="button" onClick={this.addOne}>
          Increas by 1
        </button>

        <button type="button" className="button" onClick={this.add100}>
          Increas by 100
        </button>

        <button type="button" className="button" onClick={this.increase}>
          Increas by 1 or 100
        </button>
      </div>
    );
  }
}

export default App;
