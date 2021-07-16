import React from 'react';
import PropTypes from 'prop-types';

export const Counter = props => (
  <h1>
    Count:
    {props.count}
  </h1>
);

Counter.propTypes = {
  count: PropTypes.number.isRequired,
};
