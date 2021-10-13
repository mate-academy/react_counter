import React from 'react';
import './Counter.scss';

type State = {
  count: number
};

export class Counter extends React.Component {
  state:State = {
    count: 0,
  };

  addOne = () => {
    this.setState((state:State) => (
      { count: state.count + 1 }));
  };

  add100 = () => {
    this.setState((state:State) => (
      { count: state.count + 100 }));
  };

  increase = () => {
    if (this.state.count % 5 === 0 && this.state.count > 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    return (
      <div className="Counter">
        <h1 className="Counter__title">
          Count:
          {' '}
          {
            this.state.count
          }
        </h1>
        <div className="ButtonWrapper">
          <button type="button" onClick={this.addOne} className="Counter__Add_1_Button">Add 1</button>
          <button type="button" onClick={this.add100} className="Counter__Add_100_Button">Add 100</button>
          <button type="button" onClick={this.increase} className="Counter__Add_1or100_Button">Add 1 or 100</button>
        </div>
      </div>
    );
  }
}
