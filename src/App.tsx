import './App.scss';

import React from 'react';

type State = {
  count: number;
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    count: 0,
  };

  addN = (n: number) => () =>
    this.setState(prev => {
      return {
        count: prev.count + n,
      };
    });

  addOne = this.addN(1);

  add100 = this.addN(100);

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
      <div className="App">
        <h1 className="App__title">{`Count: ${count}`}</h1>

        <button type="button" className="App__add-one" onClick={this.addOne}>
          Add 1
        </button>

        <button type="button" className="App__add-100" onClick={this.add100}>
          Add 100
        </button>

        <button type="button" className="App__increase" onClick={this.increase}>
          Increase
        </button>
      </div>
    );
  }
}
