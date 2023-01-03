import React from 'react';
import './App.scss';

type State = {
  count: number,
};

export class App extends React.Component<{}, State> {
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
    this.addOne();

    if (this.state.count % 5 === 0) {
      this.add100();
    }
  };

  render() {
    const { count } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">
          {`KILLED occupants: ${count}`}
        </h1>

        <div className="button-wrapper">
          <button type="button" className="App__add-one button" onClick={this.addOne}>
            Kill 1
          </button>

          <button type="button" className="App__add-100 button" onClick={this.add100}>
            Kill 100
          </button>

          <button type="button" className="App__increase button" onClick={this.increase}>
            Increase
          </button>
        </div>
      </div>
    );
  }
}
