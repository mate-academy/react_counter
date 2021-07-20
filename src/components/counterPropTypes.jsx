import PropTypes from 'prop-types';

export const counterPropTypes = {
  name: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};
