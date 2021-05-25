import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({ param }) => (
  <>
    <h1>
      Count:
      {param.state.count}
    </h1>
    <button
      type="button"
      onClick={param.addOne}
    >
      addOne
    </button>
    <button
      type="button"
      onClick={param.add100}
    >
      add100
    </button>
    <button
      type="button"
      onClick={param.increase}
    >
      increase
    </button>
  </>
);

Counter.propTypes = {
  param: PropTypes.shape({
    state: PropTypes.shape({
      count: PropTypes.number.isRequired,
    }).isRequired,
    addOne: PropTypes.func.isRequired,
    add100: PropTypes.func.isRequired,
    increase: PropTypes.func.isRequired,
  }).isRequired,
};

export default Counter;
