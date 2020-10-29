import React from 'react';
import PropTypes from 'prop-types';

export function Counter({
  result,
  addOne,
  add100,
  increase,
}) {
  return (
    <>
      <h1>
        {'Count: '}
        {result}
      </h1>
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
        Magic
      </button>
    </>
  );
}

Counter.propTypes = {
  result: PropTypes.number.isRequired,
  addOne: PropTypes.func.isRequired,
  add100: PropTypes.func.isRequired,
  increase: PropTypes.func.isRequired,
};
