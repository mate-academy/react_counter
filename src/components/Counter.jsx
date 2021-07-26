import React from 'react';
import './Counter.scss';

export class Counter extends React.Component {
  state = {
    counter: 0,
  }

  addOne = () => {
    this.setState(prev => ({
      counter: prev.counter + 1,
    }));
  };

  add100 = () => {
    this.setState(prev => ({
      counter: prev.counter + 100,
    }));
  };

  increase = () => {
    if (this.state.counter % 5 === 0) {
      this.add100();
      this.addOne();
    } else {
      this.addOne();
    }
  }

  render() {
    const { counter } = this.state;

    return (
      <>
        <div className="counter">
          <span className="counter__decor" />
          <div className="counter__block">
            <h1 className="counter__display">
              {counter}
            </h1>
          </div>
          <div className="counter__controls">
            <button
              className="counter__button counter__button-first"
              type="button"
              onClick={() => {
                this.addOne();
              }}
            >
              <span className="counter__button-first-top-side top-side" />
              <span className="counter__button-first-right-side right-side" />
              <span className="counter__button-first-down-side down-side" />
              <span className="counter__button-first-left-side left-side" />
              Add one
            </button>
            <button
              className="counter__button counter__button-second"
              type="button"
              onClick={() => {
                this.add100();
              }}
            >
              <span className="counter__button-second-top-side top-side" />
              <span className="counter__button-second-right-side right-side" />
              <span className="counter__button-second-down-side down-side" />
              <span className="counter__button-second-left-side left-side" />
              Add 100
            </button>
            <button
              className="counter__button counter__button-third"
              type="button"
              onClick={() => {
                this.increase()
              }}
            >
              <span className="counter__button-third-top-side top-side" />
              <span className="counter__button-third-right-side right-side" />
              <span className="counter__button-third-down-side down-side" />
              <span className="counter__button-third-left-side left-side" />
              Add ..?
            </button>
          </div>
        </div>
      </>
    );
  }
}
