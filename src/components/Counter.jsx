import React from 'react';
import PropTypes from 'prop-types';

import './Counter.scss';

export const Counter = ({ count, addOne, add100, increase }) => (
  <div className="Counter">
    <h1>
      Count:
      {count}
    </h1>

    <div className="Counter__buttons buttons">
      <button
        type="button"
        className="buttons__button"
        onClick={addOne}
      >
        add 1
      </button>

      <button
        type="button"
        className="buttons__button"
        onClick={add100}
      >
        add 100
      </button>

      <button
        type="button"
        className="buttons__button"
        onClick={increase}
      >
        increase
      </button>
    </div>
  </div>
);

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  addOne: PropTypes.func.isRequired,
  add100: PropTypes.func.isRequired,
  increase: PropTypes.func.isRequired,
};
