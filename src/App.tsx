import React from 'react';
import './App.scss';

interface State {
  count: number,
}

class App extends React.Component<{}, State> {
  state: State = {
    count: 0,
  };

  addOne = () => {
    this.setState((prevState: State) => ({
      count: prevState.count + 1,
    }));
  };

  add100 = () => {
    this.setState((prevState: State) => ({
      count: prevState.count + 100,
    }));
  };

  increase = () => {
    const { count } = this.state;

    this.addOne();

    if (count % 5 === 0) {
      this.add100();
    }
  };

  restart = () => {
    this.setState((prevState: State) => ({
      count: prevState.count * 0,
    }));
  };

  render() {
    const { count } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">
          Count:
          {' '}
          {count}
        </h1>

        <button
          type="button"
          onClick={this.addOne}
          className="App__button"
        >
          Add 1
        </button>

        <button
          type="button"
          onClick={this.add100}
          className="App__button"
        >
          Add 100
        </button>

        <button
          type="button"
          onClick={this.increase}
          className="App__button"
        >
          Increase
        </button>

        <button
          type="button"
          onClick={this.restart}
          className="App__button"
        >
          Restart
        </button>
      </div>
    );
  }
}

export default App;
