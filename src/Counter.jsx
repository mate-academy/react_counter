import React from 'react';
import PropTypes from 'prop-types';

export class Counter extends React.Component {
  static propTypes = {
    addOne: PropTypes.func.isRequired,
    add100: PropTypes.func.isRequired,
    increase: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired,
  }

  render() {
    const { addOne, add100, increase, counter } = this.props;

    return (
      <div className="p-6">
        <h1 className="title is-1">
          Count:
          {counter}
        </h1>

        <button
          className="button is-primary mx-2"
          type="button"
          onClick={() => addOne(this.counter)}
        >
          Add 1
        </button>

        <button
          className="button is-primary mx-2"
          type="button"
          onClick={() => add100(this.counter)}
        >
          Add 100
        </button>

        <button
          className="button is-primary mx-2"
          type="button"
          onClick={() => increase(this.counter)}
        >
          Increase
        </button>
      </div>
    );
  }
}
