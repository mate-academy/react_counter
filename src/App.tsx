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
    this.setState((state) => {
      return {
        count: state.count + 1,
      };
    });
  };

  add100 = () => {
    this.setState((state) => {
      return {
        count: state.count + 100,
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
      <div className="App">
        <div className="App__container">
          <h1 className="App__title">
            Count
            <p className="App__count">
              {count}
            </p>
          </h1>
          <div className="App__buttons">
            <button
              className="App__button"
              type="button"
              onClick={this.addOne}
            >
              +1
            </button>
            <button
              className="App__button"
              type="button"
              onClick={this.add100}
            >
              +100
            </button>
            <button
              className="App__button"
              type="button"
              onClick={this.increase}
            >
              Special
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
