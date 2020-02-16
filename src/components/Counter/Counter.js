import React from 'react';
import PropTypes from 'prop-types';

export const Counter = ({ counter }) => (
  <h1>
    Count:
    {counter}
  </h1>
);

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
};
