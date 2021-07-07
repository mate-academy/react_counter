import React from 'react';
import PropTypes from 'prop-types';

export const Counter = ({ count, addOne, add100, increase }) => (
  <div className="d-flex align-items-center flex-column">
    <h1 className="card-title text-secondary">
      {`Count: ${count}`}
    </h1>
    <div className="">
      <button
        type="button"
        className="btn btn-info"
        onClick={addOne}
      >
        Add 1
      </button>
      <button
        type="button"
        className="btn btn-info ml-1"
        onClick={add100}
      >
        Add 100
      </button>
      <button
        type="button"
        className="btn btn-info ml-1"
        onClick={increase}
      >
        Increase
      </button>
    </div>
  </div>
);

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  addOne: PropTypes.func.isRequired,
  add100: PropTypes.func.isRequired,
  increase: PropTypes.func.isRequired,
};
