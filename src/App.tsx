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
      if (prevState.counter % 5 === 0) {
        return {
          counter: prevState.counter + 101,
        };
      }

      return {
        counter: prevState.counter + 1,
      };
    });
  };

  render() {
    const { counter } = this.state;

    return (
      <div className="App">
        <h1 className="App__title title">
          Count:
          {' '}
          {counter}
        </h1>

        <div className="App__buttons">
          <button
            className="App__button"
            type="button"
            onClick={this.addOne}
          >
            Add 1
          </button>

          <button
            className="App__button"
            type="button"
            onClick={this.add100}
          >
            Add 100
          </button>

          <button
            className="App__button"
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
