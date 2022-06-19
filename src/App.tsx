import React from 'react';
import './App.scss';

type Props = {};

type State = {
  count: number;
};

class App extends React.Component<Props, State> {
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
    const { count } = this.state;

    this.addOne();
    if (count % 5 === 0 && count !== 0) {
      this.add100();
    }
  };

  render() {
    const { count } = this.state;

    return (
      <div className="App">
        <div className="wrapper">
          <h1 className="title wrapper__title">
            Count:
            <span className="title__count">
              {count}
            </span>
          </h1>
          <div className="buttons-box wrapper__buttons-box">
            <button
              type="button"
              className="buttons-box__button"
              onClick={this.addOne}
            >
              add one
            </button>
            <button
              type="button"
              className="buttons-box__button"
              onClick={this.add100}
            >
              add hundred
            </button>
            <button
              type="button"
              className="buttons-box__button"
              onClick={this.increase}
            >
              increase
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
