import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Button.scss';

export const Button = ({ onClick, text }) => (
  <button
    type="button"
    className={
      classNames(
        'container__button',
        'btn',
        {
          'addOne-button btn-success': text === 'Add 1',
          'add100-button btn-warning': text === 'Add 100',
          'increase-button btn-danger': text === 'Increase',
        },
      )
    }
    onClick={onClick}
  >
    {text}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};
