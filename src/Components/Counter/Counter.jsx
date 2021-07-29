import React from 'react';
import PropTypes from 'prop-types';

export class Counter extends React.Component {
  state = {
  }

  render() {
    const { count } = this.props;

    return (
      <>
        <h1>
          Count:
          {count}
        </h1>
      </>
    );
  }
}

Counter.propTypes = {
  count: PropTypes.number.isRequired,
};
