import React from 'react';
import PropTypes from 'prop-types';

export class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onClick: props.onClick,
    };
  }

  render() {
    return (
      <button type="button" onClick={this.state.onClick}>
        Count
      </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
