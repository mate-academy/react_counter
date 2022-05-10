import React from 'react';
import './App.scss';

interface State {
  counter: number;
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

  increase = (prevState: State) => {
    if (prevState.counter % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    const { counter } = this.state;

    return (
      <div className="counter">
        <h1 className="counter__title">
          Count:
          {' '}
          {counter}
        </h1>
        <div className="counter__buttons">
          <button
            type="button"
            className="button"
            onClick={() => this.addOne()}
          >
            One
          </button>

          <button
            type="button"
            className="button"
            onClick={() => this.add100()}
          >
            100
          </button>

          <button
            type="button"
            className="button"
            onClick={() => {
              this.increase(this.state);
            }}
          >
            increase
          </button>
        </div>
      </div>
    );
  }
}

export default App;
