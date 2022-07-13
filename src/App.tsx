import React from 'react';
import './App.scss';

type State = {
  number: number,
};

class App extends React.Component<{}, State> {
  state = {
    number: 0,
  };

  addOne = () => {
    this.setState((prevState) => ({
      number: prevState.number + 1,
    }));
  };

  add100 = () => {
    this.setState((prevState) => ({
      number: prevState.number + 100,
    }));
  };

  increase = () => {
    const { number } = this.state;

    if (number % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    const { number } = this.state;

    return (
      <div className="container">
        <h1 className="title">{`Count: ${number}`}</h1>

        <button
          type="button"
          onClick={this.addOne}
          className="button"
        >
          Add 1
        </button>

        <button
          type="button"
          onClick={this.add100}
          className="button"
        >
          Add 100
        </button>

        <button
          type="button"
          onClick={this.increase}
          className="button"
        >
          Increase
        </button>
      </div>
    );
  }
}

export default App;
