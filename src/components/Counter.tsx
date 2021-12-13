/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './Counter.scss';

type State = {
  counter: number;
  checked: boolean;
};

export class Counter extends React.Component<{}, State> {
  state: Readonly<State> = {
    counter: 0,
    checked: true,
  };

  addOne = () => {
    this.setState(st => ({
      counter: st.counter + 1,
    }));
  };

  add100 = () => {
    this.setState(st => ({
      counter: st.counter + 100,
    }));
  };

  increase = () => {
    this.addOne();

    if (this.state.counter % 5 === 0) {
      this.add100();
    }
  };

  changeBool = () => {
    this.setState(st => ({
      checked: !st.checked,
    }));
  };

  render(): React.ReactNode {
    return (
      <div className="Counter">
        <h1 className="Counter__title">{`Count: ${this.state.counter}`}</h1>
        <div className="Counter__buttons Buttons">
          <button
            className="Buttons__addOne Button"
            type="button"
            onClick={this.addOne}
          >
            Add 1
          </button>
          <button
            className="Buttons__addHundred Button"
            type="button"
            onClick={this.add100}
          >
            Add 100
          </button>
          <button
            className="Buttons__addMagic Button"
            type="button"
            onClick={this.increase}
            hidden={this.state.checked}
          >
            Magic
          </button>
        </div>
        <form>
          <label className="Counter__label" htmlFor="checkbox">
            Are you in Hogwarts?
          </label>
          <input
            className="Counter__checkbox"
            type="checkbox"
            id="checkbox"
            onChange={this.changeBool}
          />
        </form>
      </div>
    );
  }
}
