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
    this.addOne();

    if (this.state.counter % 5 === 0) {
      this.add100();
    }
  };

  render() {
    return (
      <>
        <h1>{`Count: ${this.state.counter}`}</h1>
        <div className="buttons">
          <button
            className="buttons__button"
            type="button"
            onClick={() => {
              this.addOne();
            }}
          >
            Add 1
          </button>
          <button
            className="buttons__button"
            type="button"
            onClick={() => {
              this.add100();
            }}
          >
            Add 100
          </button>
          <button
            className="buttons__button"
            type="button"
            onClick={() => {
              this.increase();
            }}
          >
            Smart add
          </button>
        </div>
      </>
    );
  }
}

export default App;
