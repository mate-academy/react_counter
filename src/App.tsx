import React from 'react';
import './App.scss';

type State = {
  counter: number,
};

class App extends React.Component<{}, State> {
  state: State = {
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

  increase = () => {
    this.setState((state) => {
      if (state.counter % 5 === 0) {
        this.add100();
      }

      this.addOne();
    });
  };

  render() {
    const { counter } = this.state;

    return (
      <div
        className="App has-background-primary-light"
      >
        <h1
          className="
            subtitle
            is-3
            has-text-success
            count-title
          "
        >
          {`Count: ${counter}`}
        </h1>

        <div className="buttons">
          <button
            type="button"
            className="
            button
            is-primary
            is-light
            "
            onClick={this.addOne}
          >
            Add one
          </button>

          <button
            type="button"
            className="
            button
            is-primary
            is-light
            "
            onClick={this.add100}
          >
            Add 100
          </button>

          <button
            type="button"
            className="
            button
            is-primary
            is-light
            "
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
