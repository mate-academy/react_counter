import React from 'react';
import PropTypes from 'prop-types';

export const Counter = ({ count, handleCounter }) => (
  <>
    <h3>
      Counter:
      {' '}
      {count}
    </h3>
    <button type="button" onClick={handleCounter}>+</button>
  </>
);

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  handleCounter: PropTypes.func.isRequired,
};
