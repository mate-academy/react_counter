import React from 'react';
import PropTypes from 'prop-types';

export const Counter = ({ number, addOne, add100 }) => (
  <>
    <h1>
      Count:
      {number}
    </h1>
    <button
      type="button"
      onClick={addOne}
    >
      Add 1
    </button>

    <button
      type="button"
      onClick={add100}
    >
      Add 100
    </button>

    <button
      type="button"
      onClick={number % 5 === 0
        ? () => {
          addOne();
          add100();
        }
        : addOne
        }
    >
      Increase
    </button>
  </>
);

Counter.propTypes = {
  number: PropTypes.number.isRequired,
  add100: PropTypes.func.isRequired,
  addOne: PropTypes.func.isRequired,
};
