import React from 'react';
import PropTypes from 'prop-types';

export class Button extends React.PureComponent {
  render() {
    return (
      <button type="button" onClick={this.props.onClick}>
        Count
      </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
