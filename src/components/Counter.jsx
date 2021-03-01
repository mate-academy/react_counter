import React from 'react';
import PropTypes from 'prop-types';

export class Counter extends React.Component {
  state = {
    addOne: this.props.addOne.bind(this),
    add100: this.props.add100.bind(this),
    increase: this.props.increase.bind(this),
  }

  render() {
    const { addOne, add100, increase } = this.state;
    const { count } = this.props;

    return (
      <>
        <h1>
          Count:
          {count}
        </h1>

        <button type="button" onClick={() => addOne()}>Add One</button>
        <button type="button" onClick={() => add100()}>Add 100</button>
        <button type="button" onClick={() => increase()}>Increase</button>
      </>
    );
  }
}

Counter.propTypes = {
  addOne: PropTypes.func.isRequired,
  add100: PropTypes.func.isRequired,
  increase: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
};
