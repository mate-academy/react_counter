import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

export function Counter({ count, addOne, add100, increase, reset }) {
  return (
    <>
      <h1>{`Count: ${count}`}</h1>
      <div className="buttons-container">
        <Button
          variant="outline-primary"
          onClick={addOne}
        >
          + 1
        </Button>
        <Button
          variant="outline-primary"
          onClick={add100}
        >
          + 100
        </Button>
        <Button
          variant="outline-primary"
          onClick={increase}
        >
          Increase
        </Button>
        <Button
          variant="outline-danger"
          onClick={reset}
        >
          Reset
        </Button>
      </div>
    </>
  );
}

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  addOne: PropTypes.func.isRequired,
  add100: PropTypes.func.isRequired,
  increase: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};
