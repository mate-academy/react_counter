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
    this.setState((prevState: State) => {
      return {
        count: prevState.count + 1,
      };
    });
  };

  add100 = () => {
    this.setState((prevState: State) => {
      return {
        count: prevState.count + 100,
      };
    });
  };

  increase = () => {
    const { count } = this.state;

    this.addOne();
    if (count % 5 === 0 && count !== 0) {
      this.add100();
    }
  };

  render() {
    return (
      <div className="App">
        <h1>{`Count: ${this.state.count}`}</h1>

        <div className="App__buttons">
          <button
            type="button"
            className="App__button"
            onClick={this.addOne}
          >
            Add 1
          </button>

          <button
            type="button"
            className="App__button"
            onClick={this.add100}
          >
            Add 100
          </button>

          <button
            type="button"
            className="App__button"
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
