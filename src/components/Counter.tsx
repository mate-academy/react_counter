import React from 'react';
import './Counter.scss';

type State = {
  count: number,
};

export class Counter extends React.Component<{}, State> {
  state = {
    count: 0,
  };

  addOne = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  add100 = () => {
    this.setState((prevState) => ({ count: prevState.count + 100 }));
  };

  increase = () => {
    this.setState((prevState) => {
      this.addOne();

      if (prevState.count % 5 === 0) {
        this.add100();
      }
    });
  };

  render() {
    const { count } = this.state;

    return (
      <section className="Counter">
        <div className="Counter__content">
          <h1 className="Counter__title">
            {`Count: ${count}`}
          </h1>
          <div className="Counter__buttons">
            <button
              type="button"
              onClick={this.addOne}
              className="Counter__button"
            >
              Add One
            </button>
            <button
              type="button"
              onClick={this.add100}
              className="Counter__button"
            >
              Add 100
            </button>
            <button
              type="button"
              onClick={this.increase}
              className="Counter__button"
            >
              Increase
            </button>
          </div>
        </div>
      </section>
    );
  }
}
