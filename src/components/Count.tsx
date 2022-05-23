import React from 'react';
import './Count.scss';

type State = {
  count: number
};

export class Count extends React.Component<{}, State> {
  state = {
    count: 0,
  };

  addOne = () => {
    this.setState(({ count }) => ({
      count: count + 1,
    }));
  };

  add100 = () => {
    this.setState(({ count }) => ({
      count: count + 100,
    }));
  };

  increase = () => {
    if (this.state.count % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  clear = () => {
    this.setState({
      count: 0,
    });
  };

  render() {
    const { count } = this.state;

    return (
      <div className="Count">
        <h1 className="Count__title">{`Count: ${count}`}</h1>

        <div className="Count__buttons">
          <button
            type="button"
            onClick={this.addOne}
            className="Count__button"
          >
            + 1
          </button>

          <button
            type="button"
            onClick={this.add100}
            className="Count__button"
          >
            + 100
          </button>

          <button
            type="button"
            onClick={this.increase}
            className="Count__button"
          >
            + 1, but with a little detail)))
          </button>
        </div>

        <button
          type="button"
          className="Count__button Count__button--clear"
          onClick={this.clear}
        >
          Reset
        </button>
      </div>
    );
  }
}
