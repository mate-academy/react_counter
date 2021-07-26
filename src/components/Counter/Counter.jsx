import React from 'react';
import PropTypes from 'prop-types';

import './Counter.scss';

export const Counter = ({
  count,
  addOne,
  add100,
  increase,
}) => (
  <div className="Counter">
    <h1 className="Counter__title">
      {`Count: ${count}`}
    </h1>
    <button
      type="button"
      className="Counter__button"
      onClick={addOne}
    >
      Add 1
    </button>
    <button
      type="button"
      className="Counter__button"
      onClick={add100}
    >
      Add 100
    </button>
    <button
      type="button"
      className="Counter__button"
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
