import React from 'react';
import './Counter.scss';

interface State {
  count: number
}

export class Counter extends React.Component<{}, State> {
  state: State = {
    count: 0,
  };

  addOne = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  };

  add100 = () => {
    this.setState(prevState => ({
      count: prevState.count + 100,
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
      <div className="counter">
        <h1 className="counter__title">{`Count: ${count}`}</h1>

        <div className="counter__buttons">
          <button
            type="button"
            onClick={this.addOne}
            className="counter__button"
          >
            Add 1
          </button>

          <button
            type="button"
            onClick={this.add100}
            className="counter__button"
          >
            Add 100
          </button>

          <button
            type="button"
            onClick={this.increase}
            className="counter__button"
          >
            Increase
          </button>
        </div>
      </div>
    );
  }
}
