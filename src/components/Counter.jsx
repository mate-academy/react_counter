import React from 'react';
import PropTypes from 'prop-types';

export class Counter extends React.Component {

  render() {

    const { addOne, add100, increase, count } = this.props;

    return (
      <div className="Counter">
        <h1> Count: {count}</h1>
        <button
          type="button"
          onClick={() => addOne()}
        >
          Add One
        </button>


        <button
          type="button"
          onClick={() => add100()}
        >
          Add 100
        </button>

        <button
          type="button"
          onClick={() => increase()}
        >
          increase
        </button>
      </div>
    )
  }
};

Counter.propTypes = {
  addOne: PropTypes.func.isRequired,
  add100: PropTypes.func.isRequired,
  increase: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
};