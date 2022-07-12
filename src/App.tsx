import { Component } from 'react';
import './App.scss';

type State = {
  count: number;
};

class App extends Component<{}, State> {
  state: Readonly<State> = {
    count: 0,
  };

  addOne = () => {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  };

  add100 = () => {
    this.setState((state) => ({
      count: state.count + 100,
    }));
  };

  increase = () => {
    const { count } = this.state;

    if (count % 5 === 0) {
      this.add100();
      this.addOne();
    } else {
      this.addOne();
    }
  };

  render() {
    return (
      <div className="App">
        <div className="App__container">
          <h1 className="App__title">
            {`Count: ${this.state.count}`}
          </h1>

          <button
            className="App__button"
            type="button"
            onClick={this.addOne}
          >
            Add 1
          </button>
          <button
            className="App__button"
            type="button"
            onClick={this.add100}
          >
            Add 100
          </button>
          <button
            className="App__button"
            type="button"
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
