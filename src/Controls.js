import React from 'react';
import PropTypes from 'prop-types';

export const Add1 = props => (
  <button
    type="button"
    onClick={props.addOne.bind(props.app)}
  >
    Add 1
  </button>
);

export const Add100 = props => (
  <button
    type="button"
    onClick={props.add100.bind(props.app)}
  >
    Add 100
  </button>
);

export const Increase = props => (
  <button
    type="button"
    onClick={props.increase.bind(props.app)}
  >
    Increase
  </button>
);

const appType = PropTypes.shape({
  count: PropTypes.number.isRequired,
});

Increase.propTypes = {
  app: appType.isRequired,
  increase: PropTypes.func.isRequired,
};

Add100.propTypes = {
  app: appType.isRequired,
  add100: PropTypes.func.isRequired,
};

Add1.propTypes = {
  app: appType.isRequired,
  addOne: PropTypes.func.isRequired,
};
