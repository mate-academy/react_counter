import React from 'react';
import '../../node_modules/bootswatch/dist/sketchy/bootstrap.min.css';
import PropTypes from 'prop-types';
import './Counter.css';

export const Counter = ({
  counterValue,
  incrementDecrement,
}) => (
  <>
    <h1>
    Count:
      {counterValue}
    </h1>
    <button
      name="increment"
      type="button"
      className="btn btn-outline-success"
      onClick={incrementDecrement}
    >
            Increment
    </button>
    <button
      name="decrement"
      type="button"
      className="btn btn-outline-success"
      onClick={incrementDecrement}
    >
      Decrement
    </button>
  </>
);

Counter.propTypes = {
  counterValue: PropTypes.number,
  incrementDecrement: PropTypes.func,
};

Counter.defaultProps = {
  counterValue: 0,
  incrementDecrement: () => {},
};
