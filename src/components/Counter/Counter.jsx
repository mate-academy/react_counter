import React from 'react';
import PropTypes from 'prop-types';

export function Counter(props) {
  return (
    <>
      <button type="button" onClick={props.addOne}>Add 1</button>
      <button type="button" onClick={props.add100}>Add 100</button>
      <button type="button" onClick={props.increase}>Increase</button>
    </>
  );
}

Counter.propTypes = {
  addOne: PropTypes.func.isRequired,
  add100: PropTypes.func.isRequired,
  increase: PropTypes.func.isRequired,
};
