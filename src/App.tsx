import React from 'react';
import './App.scss';

type State = {
  count: number,
};

export class App extends React.Component<{}, State> {
  state = {
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
          </h1>
          <div className="App__value">
            {count}
          </div>
          <div className="App__buttons">
            <button
              className="App__button"
              type="button"
              onClick={this.addOne}
            >
              Капнуть капельку
            </button>
            <button
              className="App__button"
              type="button"
              onClick={this.add100}
            >
              Добавить 100г
            </button>
            <button
              className="App__button"
              type="button"
              onClick={this.increase}
            >
              Drunk button
            </button>
          </div>
        </div>
      </div>
    );
  }
}
