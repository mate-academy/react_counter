import React from 'react';
import '../../node_modules/bootswatch/dist/sketchy/bootstrap.min.css';
import PropTypes from 'prop-types';
import './Counter.css';

export const Counter = ({
  counerValue,
  incrementFunction,
  decrimentFunction,
}) => (
  <>
    <h1>
    Count:
      {counerValue}
    </h1>
    <button
      type="button"
      className="btn btn-outline-success"
      onClick={incrementFunction}
    >
            Increment
    </button>
    <button
      type="button"
      className="btn btn-outline-success"
      onClick={decrimentFunction}
    >
      Decrement
    </button>
  </>
);

Counter.propTypes = {
  counerValue: PropTypes.number,
  incrementFunction: PropTypes.func,
  decrimentFunction: PropTypes.func,
};

Counter.defaultProps = {
  counerValue: 0,
  incrementFunction: () => {},
  decrimentFunction: () => {},
};
