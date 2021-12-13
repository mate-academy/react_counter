import React from 'react';
import './App.scss';

type State = {
  count: number,
};

class App extends React.Component<{}, State> {
  state = {
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
    if (this.state.count !== 0 && this.state.count % 5 === 0) {
      this.add100();
    }
  };

  render() {
    return (
      <div className="App">
        <h1 className="App__title">
          Count:
          {' '}
          {this.state.count}
        </h1>
        <div className="App__buttons">
          <button
            type="button"
            onClick={() => this.addOne()}
            className="App__button"
          >
            Add 1
          </button>
          <button
            type="button"
            onClick={() => this.add100()}
            className="App__button"
          >
            Add 100
          </button>
          <button
            type="button"
            onClick={() => this.increase()}
            className="App__button"
          >
            Add 1 and maybe add 100
          </button>
        </div>
      </div>
    );
  }
}

export default App;
