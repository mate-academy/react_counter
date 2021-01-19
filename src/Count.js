import React from 'react';
import PropTypes from 'prop-types';

export const Count = ({ count, addOne, add100, increase }) => (
  <div>
    <h1>
      Count:
      {' '}
      { count }
    </h1>
    <button
      type="button"
      onClick={addOne}
      className="button"
    >
      Add One
    </button>
    <button
      type="button"
      onClick={add100}
      className="button"
    >
      Add 100
    </button>
    <button
      type="button"
      onClick={increase}
      className="button"
    >
      Increase
    </button>
  </div>
);

Count.propTypes = {
  addOne: PropTypes.func.isRequired,
  add100: PropTypes.func.isRequired,
  increase: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
};
