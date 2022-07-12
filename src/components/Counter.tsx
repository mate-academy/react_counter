import { Component } from 'react';

type State = {
  number: number
};

export class Counter extends Component<{}, State> {
  state = {
    number: 0,
  };

  addOne = () => {
    this.setState((state) => ({
      number: state.number + 1,
    }));
  };

  add100 = () => {
    this.setState((state) => ({
      number: state.number + 100,
    }));
  };

  render() {
    const { number } = this.state;

    return (
      <div className="container box">
        <h1 className="count">{`Count: ${number}`}</h1>

        <div className="container__button">
          <button
            type="button"
            className="button is-info is-small"
            onClick={this.addOne}
          >
            Add one
          </button>

          <button
            type="button"
            className="button is-info is-small"
            onClick={this.add100}
          >
            adds 100
          </button>

          <button
            type="button"
            className="button is-info is-small"
            onClick={() => {
              this.addOne();
              if (number % 5 === 0) {
                this.add100();
              }
            }}
          >
            Increase
          </button>
        </div>
      </div>
    );
  }
}
