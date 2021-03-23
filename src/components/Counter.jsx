import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
export class Counter extends React.Component {
  render() {
    const { count, addOne, add100, increase } = this.props;

    return (
      <>
        <h1>
          {`Count: ${count}`}
        </h1>
        <button type="button" onClick={addOne}>Add 1</button>
        <button type="button" onClick={add100}>Add 100</button>
        <button type="button" onClick={increase}>Increase</button>
      </>
    );
  }
}

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  addOne: PropTypes.func.isRequired,
  add100: PropTypes.func.isRequired,
  increase: PropTypes.func.isRequired,
};
