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
    this.setState(state => ({
      count: state.count + 1,
    }));
  };

  add100 = () => {
    this.setState(state => ({
      count: state.count + 100,
    }));
  };

  increase = () => {
    if (this.state.count % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    const { count } = this.state;

    return (
      <div>

        <h1>
          Count: &nbsp;
          {count}
        </h1>

        <button
          type="button"
          className="button1"
          onClick={this.addOne}
        >
          addOne
        </button>

        <button
          type="button"
          className="button2"
          onClick={this.add100}

        >
          add100
        </button>

        <button
          type="button"
          className="button3"
          onClick={this.increase}

        >
          increase
        </button>

      </div>
    );
  }
}
