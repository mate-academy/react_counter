import React from 'react';
import PropTypes from 'prop-types';

export function Counter({ count, addOne, add100, increase }) {
  return (
    <>
      <h1>{count}</h1>

      <button
        type="button"
        onClick={addOne}
      >
        addOne
      </button>

      <button
        type="button"
        onClick={add100}
      >
        add100
      </button>

      <button
        type="button"
        onClick={increase}
      >
        increase
      </button>
    </>
  );
}

Counter.propTypes = PropTypes.shape({
  count: PropTypes.number.isRequired,
  addOne: PropTypes.func.isRequired,
  add100: PropTypes.func.isRequired,
  increase: PropTypes.func.isRequired,
}).isRequired;
