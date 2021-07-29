import React from 'react';
import PropTypes from 'prop-types';

export class Button extends React.Component {
  state = {
  }

  render() {
    const { addOne, add100, increase } = this.props;

    return (
      <>
        <button
          onClick={addOne}
          type="button"
        >
          add one
        </button>
        <button
          onClick={increase}
          type="button"
        >
          increase
        </button>
        <button
          onClick={add100}
          type="button"
        >
          add one hundred
        </button>
      </>
    );
  }
}

Button.propTypes = {
  addOne: PropTypes.func.isRequired,
  add100: PropTypes.func.isRequired,
  increase: PropTypes.func.isRequired,
};
