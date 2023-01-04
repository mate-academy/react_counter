import React from 'react';
import './App.scss';
import 'bulma/css/bulma.css';

type State = {
  count: number,
};

export class App extends React.Component<{}, State> {
  state: State = {
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

  // DON'T change the code below
  increase = () => {
    this.addOne();

    if (this.state.count % 5 === 0) {
      this.add100();
    }
  };

  render() {
    const { count } = this.state;

    return (
      <div className="App box">
        <h1 className="title App__title">
          {`Count: ${count}`}
        </h1>

        <button
          type="button"
          className="
            button
            is-info
            addGap
            App__add-one"
          onClick={this.addOne}
        >
          Add 1
        </button>

        <button
          type="button"
          className="
            button
            is-info
            addGap
            App__add-100"
          onClick={this.add100}
        >
          Add 100
        </button>

        <button
          type="button"
          className="
            button
            is-info
            addGap
            App__increase"
          onClick={this.increase}
        >
          Increase
        </button>
      </div>
    );
  }
}
