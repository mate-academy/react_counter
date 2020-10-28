import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({ count, addOne, add100, increase, remover }) => (
  // eslint-disable-next-line
  <div className="w-50 mx-auto d-flex justify-content-between flex-column align-items-center my-5 py-5">
    <h1>
      Count:
      {' '}
      {count}
    </h1>
    <div>
      <button
        type="button"
        onClick={addOne}
        className="btn btn-light m-3"
      >
        Add one
      </button>
      <button
        type="button"
        onClick={add100}
        className="btn btn-light m-3"
      >
        Add 100
      </button>
      <button
        type="button"
        onClick={increase}
        className="btn btn-light m-3"
      >
        Increase
      </button>
    </div>
    <button
      type="button"
      onClick={remover}
      className="btn btn-danger m-3 px-5"
    >
      X
    </button>
  </div>
);

Counter.propTypes = {
  count: PropTypes.number,
  addOne: PropTypes.func.isRequired,
  add100: PropTypes.func.isRequired,
  increase: PropTypes.func.isRequired,
  remover: PropTypes.func.isRequired,
};

Counter.defaultProps = {
  count: 0,
};

export default Counter;
