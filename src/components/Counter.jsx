import PropTypes from 'prop-types';
import React from 'react';

export function Counter({
  addOne,
  add100,
  increase,
  count,
}) {
  return (
    <>
      <h1>
        {`Count: ${count}`} 
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
        increase
      </button>
    </>
  );
}

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  addOne: PropTypes.func.isRequired,
  add100: PropTypes.func.isRequired,
  increase: PropTypes.func.isRequired,
};
