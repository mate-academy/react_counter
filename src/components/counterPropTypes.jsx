import PropTypes from 'prop-types';

export const counterPropTypes = {
  name: PropTypes.string.isRequired,
  onCLick: PropTypes.func.isRequired,
};
