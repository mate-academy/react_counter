import React from 'react';
import './App.scss';

type State = {
  count: number;
};

class App extends React.Component<{}, State> {
  state: State = {
    count: 0,
  };

  addOne = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  };

  add100 = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 100,
      };
    });
  };

  increase = () => {
    this.addOne();

    if (this.state.count % 5 === 0) {
      this.add100();
    }
  };

  render() {
    const { count } = this.state;

    return (
      <>
        <h1
          className="title"
        >
          Count:
          {` ${count}`}
        </h1>

        <br />

        <button
          type="button"
          className="button"
          onClick={this.addOne}
        >
          addOne
        </button>
        <button
          type="button"
          className="button"
          onClick={this.add100}
        >
          add100
        </button>
        <button
          type="button"
          className="button"
          onClick={this.increase}
        >
          addOne
        </button>
      </>
    );
  }
}

export default App;
