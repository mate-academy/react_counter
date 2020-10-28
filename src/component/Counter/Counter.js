import React from 'react';
import PropTypes from 'prop-types';
import './Counter.scss';

export const Counter = ({ count, addOne, add100, increase }) => (
  <>
    <h1 className={count % 5 === 0
      ? 'multiple-of-five'
      : 'not-multiple'
    }
    >
      {`Count: ${count}`}
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
      className={count % 5 === 0
        ? 'multiple-of-five-bg'
        : ''
      }
    >
      Increase
    </button>
  </>
);

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  addOne: PropTypes.func.isRequired,
  add100: PropTypes.func.isRequired,
  increase: PropTypes.func.isRequired,
};
