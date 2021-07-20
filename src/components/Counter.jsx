import React from 'react';
import propTypes from 'prop-types';
import { Button } from './Button';

export const Counter = ({ count, add1, add100, increase }) => (
  <>
    <h1>
      Count:
      {count}
    </h1>
    <Button action={add1} text="Add 1" />
    <Button action={add100} text="Add 100" />
    <Button action={increase} text="increase" />
  </>
);

Counter.propTypes = {
  count: propTypes.number.isRequired,
  add1: propTypes.func.isRequired,
  add100: propTypes.func.isRequired,
  increase: propTypes.func.isRequired,
};
