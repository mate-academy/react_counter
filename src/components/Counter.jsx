import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './button';

export const Counter = ({
  count,
  addOne,
  add100,
  increase,
}) => (
  <>
    <h1>
      Count:
      {count}
    </h1>
    <Button
      action={addOne}
      text="add 1"
    />
    <Button
      action={add100}
      text="add 100"
    />
    <Button
      action={increase}
      text="increase"
    />
  </>
);

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  addOne: PropTypes.func.isRequired,
  add100: PropTypes.func.isRequired,
  increase: PropTypes.func.isRequired,
};
