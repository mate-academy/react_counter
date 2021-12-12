import React from 'react';
import './App.scss';

type Props = {};

interface State {
  counter: number,
}

class App extends React.Component<Props, State> {
  state: State = {
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
    const amount = this.state.counter;

    if (amount % 5 === 0) {
      this.add100();
    }
  };

  render() {
    const { counter } = this.state;

    return (
      <div className="app">
        <h1 className="app__title">{`Count: ${counter}`}</h1>
        <div className="buttons app__buttons">
          <button
            type="button"
            onClick={this.addOne}
            className="button buttons__button"
          >
            Add one
          </button>

          <button
            type="button"
            onClick={this.add100}
            className="button buttons__button"
          >
            Add 100
          </button>

          <button
            type="button"
            onClick={this.increase}
            className="button buttons__button"
          >
            something interesting 🙌
          </button>
        </div>
      </div>
    );
  }
}

export default App;
