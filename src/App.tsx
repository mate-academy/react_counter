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
    this.setState((prevState) => (
      { counter: prevState.counter + 1 }
    ));
  };

  add100 = () => {
    this.setState((prevState) => (
      { counter: prevState.counter + 100 }
    ));
  };

  increase = () => {
    this.setState((prevState) => {
      if (prevState.counter % 5 === 0) {
        this.add100();
      }

      this.addOne();
    });
  };

  render() {
    return (
      <div className="app">
        <h1 className="app__counter">
          Count:
          {' '}
          {this.state.counter}
        </h1>

        <div className="app__buttons">
          <button
            type="button"
            onClick={this.addOne}
            className="app__button"
          >
            Add 1
          </button>

          <button
            type="button"
            onClick={this.add100}
            className="app__button"
          >
            Add 100
          </button>

          <button
            type="button"
            onClick={this.increase}
            className="app__button"
          >
            Add some magic
          </button>
        </div>
      </div>

    );
  }
}

export default App;
