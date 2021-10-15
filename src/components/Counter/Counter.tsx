import React from 'react';
import './Counter.scss';

interface State {
  counter: number,
}

export class Counter extends React.Component<{}, State> {
  state: State = {
    counter: 0,
  };

  addOne = () => {
    this.setState((state) => ({
      counter: state.counter + 1,
    }));
  };

  add100 = () => {
    this.setState((state) => ({
      counter: state.counter + 100,
    }));
  };

  increase = () => {
    if (this.state.counter % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  clear = () => {
    this.setState({ counter: 0 });
  };

  render() {
    const { counter } = this.state;

    return (
      <div className="Counter">
        <h1 className="Counter-Title">{`Count: ${counter}`}</h1>
        <button
          className="Counter-Button"
          type="button"
          onClick={this.addOne}
        >
          addOne
        </button>
        <button
          className="Counter-Button"
          type="button"
          onClick={this.add100}
        >
          add100
        </button>
        <button
          className="Counter-Button"
          type="button"
          onClick={this.increase}
        >
          increase
        </button>
        <button
          className="Counter-Button"
          type="button"
          onClick={this.clear}
        >
          clear
        </button>
      </div>
    );
  }
}
