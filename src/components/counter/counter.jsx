import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../button/button';

export const Counter = ({ count, addOne, add100, increase }) => (
  <>
    <h1>
      Count:
      {count}
    </h1>
    <Button
      callback={addOne}
      text="Add one"
    />
    <Button
      callback={add100}
      text="Add 100"
    />
    <Button
      callback={increase}
      text="Increase"
    />
  </>
);

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  addOne: PropTypes.func.isRequired,
  add100: PropTypes.func.isRequired,
  increase: PropTypes.func.isRequired,
};
