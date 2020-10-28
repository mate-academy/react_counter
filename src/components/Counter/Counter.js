import React from 'react';
import PropTypes from 'prop-types';

import './counter.scss';

const Counter = ({ count, addOne, add100, increase }) => (
  <div className="counter">
    <h1>
      Count:&nbsp;
      {count}
    </h1>
    <button
      type="button"
      className="counter__button"
      onClick={addOne}
    >
      Add one
    </button>

    <button
      type="button"
      className="counter__button"
      onClick={add100}
    >
      Add 100
    </button>

    <button
      type="button"
      className="counter__button"
      onClick={increase}
    >
      Increase
    </button>
  </div>
);

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  addOne: PropTypes.func.isRequired,
  add100: PropTypes.func.isRequired,
  increase: PropTypes.func.isRequired,
};

export { Counter };
