import React from 'react';
import './App.scss';

type State = {
  count: number;
};

class App extends React.Component<{}, State> {
  state = {
    count: 0,
  };

  addOne = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  add100 = () => {
    this.setState((prevState) => ({
      count: prevState.count + 100,
    }));
  };

  increase = () => {
    const { count } = this.state;

    if (count % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    const { count } = this.state;

    return (
      <div className="app">
        <h1 className="app__title">{`Count: ${count}`}</h1>

        <button
          type="button"
          className="app__button"
          onClick={this.addOne}
        >
          Add 1
        </button>

        <button
          type="button"
          className="app__button"
          onClick={this.add100}
        >
          Add 100
        </button>

        <button
          type="button"
          className="app__button"
          onClick={this.increase}
        >
          Increase
        </button>
      </div>
    );
  }
}

export default App;
