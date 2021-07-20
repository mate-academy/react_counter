import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Button extends Component {
  render() {
    return (
      <>
        <button
          onClick={this.props.parentAddOne}
          className=""
          type="button"
        >
          Add 1
        </button>
        <button
          onClick={this.props.parentAdd100}
          className=""
          type="button"
        >
          Add 100
        </button>
        <button
          onClick={this.props.parentIncrease}
          className=""
          type="button"
        >
          Increase
        </button>
      </>
    );
  }
}

Button.propTypes = {
  parentAddOne: PropTypes.func.isRequired,
  parentAdd100: PropTypes.func.isRequired,
  parentIncrease: PropTypes.func.isRequired,
};
