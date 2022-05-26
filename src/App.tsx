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
    this.setState((prevState) => {
      if (prevState.counter % 5 === 0) {
        return {
          counter: prevState.counter + 100,
        };
      }

      return {
        counter: prevState.counter,
      };
    });
    this.addOne();
  };

  render() {
    const { counter } = this.state;

    return (
      <div className="Counter">
        <h1 className="Counter__title">
          Count:
          {' '}
          {counter}
        </h1>
        <div className="Counter__buttons">
          <button
            className="Counter__button"
            type="button"
            onClick={this.addOne}
          >
            Add 1
          </button>
          <button
            className="Counter__button"
            type="button"
            onClick={this.add100}
          >
            Add 100
          </button>
          <button
            className="Counter__button"
            type="button"
            onClick={this.increase}
          >
            Increase
          </button>
        </div>
      </div>
    );
  }
}

export default App;
