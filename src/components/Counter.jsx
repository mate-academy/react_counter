import React from 'react';
import PropTypes from 'prop-types';

export const Counter = props => (
  <>
    <h1>
      Count:
      {' '}
      { props.count }
    </h1>
    <button
      type="button"
      onClick={props.addOne}
    >
      Add one
    </button>
    <button
      type="button"
      onClick={props.add100}
    >
      Add 100
    </button>
    <button
      type="button"
      onClick={props.increase}
    >
      Increase
    </button>
  </>
);

Counter.defaultProps = {
  count: 0,
  addOne: PropTypes.func,
  add100: PropTypes.func,
  increase: PropTypes.func,
};

Counter.propTypes = {
  count: PropTypes.number,
  addOne: PropTypes.func,
  add100: PropTypes.func,
  increase: PropTypes.func,
};
