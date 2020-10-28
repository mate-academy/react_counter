import React from 'react';
import PropTypes from 'prop-types';

export function Counter({
  state,
  addOne,
  add100,
  increase,
}) {
  const { result } = state;

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
  state: PropTypes.shape({
    result: PropTypes.number.isRequired,
  }.isRequired).isRequired,
  addOne: PropTypes.func.isRequired,
  add100: PropTypes.func.isRequired,
  increase: PropTypes.func.isRequired,
};
