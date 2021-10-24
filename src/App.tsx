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
    this.setState((state) => ({
      counter: state.counter + 1,
    }));
  };

  add100 = () => {
    this.setState((state) => ({
      counter: state.counter + 100,
    }));
  };

  increase = (counter: number) => {
    return ((counter % 5 !== 0) || (counter < 4))
      ? this.setState((state) => ({
        counter: state.counter + 1,
      }))
      : this.setState((state) => ({
        counter: state.counter + 101,
      }));
  };

  render() {
    const { counter } = this.state;

    return (
      <>
        <div className="App">
          <h1 className="Counter">
            {'Counter is: '}
            {counter}
          </h1>
          <div className="button">
            <button
              type="button"
              className="button__item"
              onClick={this.addOne}
            >
              +1
            </button>
            <button
              type="button"
              className="button__item"
              onClick={this.add100}
            >
              +100
            </button>
            <button
              type="button"
              className="button__item"
              onClick={() => this.increase(counter)}
            >
              incress
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default App;
