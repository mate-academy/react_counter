import React from 'react';
import './App.scss';

interface State {
  counter: number,
}

class App extends React.Component<{}, State> {
  state = {
    counter: 0,
  };

  addOne = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  add100 = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 100,
    }));
  };

  increase = () => {
    this.setState((prevState) => {
      this.addOne();

      if (prevState.counter % 5 === 0) {
        this.add100();
      }
    });
  };

  render() {
    const { counter } = this.state;

    return (
      <div className="App">
        <h1>{`Count: ${counter}`}</h1>

        <div className="App__wrap-btn">
          <button
            type="button"
            className="App__btn"
            onClick={this.addOne}
          >
            Add 1
          </button>

          <button
            type="button"
            className="App__btn"
            onClick={this.add100}
          >
            Add 100
          </button>

          <button
            type="button"
            className="App__btn"
            onClick={this.increase}
          >
            Add 1 or 101
          </button>
        </div>
      </div>
    );
  }
}

export default App;
