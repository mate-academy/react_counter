import React from 'react';
import PropTypes from 'prop-types';

export const Counter = ({ count, addOne, add100 }) => (
  <>
    <h1>
      Counter:
      {count}
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
      onClick={count % 5 === 0
        ? () => {
          addOne();
          add100();
        }
        : addOne
      }
    >
      Add 1 or 101
    </button>
  </>
);

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  addOne: PropTypes.func.isRequired,
  add100: PropTypes.func.isRequired,
};
