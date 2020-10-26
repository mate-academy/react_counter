import React from 'react';
import PropTypes from 'prop-types';

export const Counter = ({ count }) => (
  <h1>
    {`Count: ${count}`}
  </h1>
);

Counter.propTypes = {
  count: PropTypes.number.isRequired,
};
