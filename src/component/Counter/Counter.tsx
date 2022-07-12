import React from 'react';
import './Counter.scss';

type State = {
  counter: number,
  count: number
};

export class Counter extends React.Component<{}, State> {
  state: Readonly<State> = {
    counter: 0,
    count: 0,
  };

  addOne = () => {
    this.setState((state) => {
      return { counter: state.counter + 1 };
    });
  };

  add100 = () => {
    this.setState((state) => {
      return { counter: state.counter + 100 };
    });
  };

  Increase = () => {
    const { count } = this.state;

    if (count <= 5) {
      this.addOne();
      this.setState((state => {
        return { count: state.count + 1 };
      }));
    }

    if (count === 5) {
      this.add100();
      this.setState({ count: 0 });
    }
  };

  render() {
    const { counter } = this.state;

    return (
      <div className="counter app__counter">
        <h1 className="counter__title">{`Count: ${counter}`}</h1>
        <div className="counter__buttons">
          <button
            type="button"
            className="counter__button button"
            onClick={() => this.addOne()}
          >
            Add 1
          </button>

          <button
            type="button"
            className="counter__button button"
            onClick={() => this.add100()}
          >
            Add 100
          </button>

          <button
            type="button"
            className="counter__button button"
            onClick={() => this.Increase()}
          >
            Increase
          </button>
        </div>
      </div>
    );
  }
}
