import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Counter.scss';

export const Counter = ({ counter, addOne, add100, increase }) => (
  <>
    <h1 className={
      classNames(
        {
          'multiple-of-five': counter % 5 === 0,
        },
      )
    }
    >
      {`Count: ${counter}`}
    </h1>
    <button
      type="button"
      onClick={addOne}
    >
      Add 1
    </button>
    <button
      type="button"
      onClick={add100}
    >
      Add 100
    </button>
    <button
      type="button"
      onClick={increase}
      className={
        classNames(
          {
            'multiple-of-five-bg': counter % 5 === 0,
          },
        )
      }
    >
      Increase
    </button>
  </>
);

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  addOne: PropTypes.func.isRequired,
  add100: PropTypes.func.isRequired,
  increase: PropTypes.func.isRequired,
};
