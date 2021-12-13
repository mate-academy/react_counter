import React from 'react';
import style from './Counter.module.css';

type Props = {};

interface State {
  counter: number,
}

class Counter extends React.Component<Props, State> {
  state: State = {
    counter: 0,
  };

  addOne = () => {
    this.setState(state => ({
      counter: state.counter + 1,
    }));
  };

  add100 = () => {
    this.setState(state => ({
      counter: state.counter + 100,
    }));
  };

  increase = () => {
    this.addOne();
    const amount = this.state.counter;

    if (amount % 5 === 0) {
      this.add100();
    }
  };

  render() {
    const { counter } = this.state;

    return (
      <div className={style.count}>
        <h1 className={style.title}>{`Count: ${counter}`}</h1>

        <div className={style.buttons}>
          <button
            className={style.btn}
            type="button"
            onClick={this.addOne}
          >
            Add one
          </button>

          <button
            className={style.btn}
            type="button"
            onClick={this.add100}
          >
            Add 100
          </button>

          <button
            className={style.btn}
            type="button"
            onClick={this.increase}
          >
            Increase
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
