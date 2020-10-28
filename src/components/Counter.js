import React from 'react';
import PropTypes from 'prop-types';
import './Counter.scss';

export const Counter = ({ count, addOne, add100, increase }) => (
  <>
    <h1>{`Count : ${count}`}</h1>
    <button
      className="button"
      type="button"
      onClick={addOne}
    >
      addOne
    </button>
    <button
      className="button"
      type="button"
      onClick={add100}
    >
      add100
    </button>
    <button
      className="button"
      type="button"
      onClick={increase}
    >
      increase
    </button>
  </>
);

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  addOne: PropTypes.func.isRequired,
  add100: PropTypes.func.isRequired,
  increase: PropTypes.func.isRequired,
};
