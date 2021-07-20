import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Button extends Component {
  render() {
    return (
      <>
        <button
          onClick={this.props.action}
          className=""
          type="button"
        >
          {this.props.text}
        </button>
      </>
    );
  }
}

Button.propTypes = {
  action: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};
