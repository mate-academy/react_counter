import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

const Count = ({ count, increase, addOne, add100 }) => (
  <>
    <h1>
      Count:
      {' '}
      {count}
    </h1>
    <Button action={addOne} text="Add One" />
    <Button action={add100} text="Add 100" />
    <Button action={increase} text="increase" />
  </>
);

Count.propTypes = {
  count: PropTypes.number.isRequired,
  increase: PropTypes.func.isRequired,
  addOne: PropTypes.func.isRequired,
  add100: PropTypes.func.isRequired,
};

export default Count;
