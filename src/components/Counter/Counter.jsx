import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button';

export const Counter = ({ counter, addOne, add100, increase }) => (
  <div className="container">
    <h1 className="title">{counter}</h1>
    <div className="buttons">
      <Button text="add one" callback={addOne} />
      <Button text="add 100" callback={add100} />
      <Button text="increase" callback={increase} />
    </div>
  </div>
);

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  addOne: PropTypes.func.isRequired,
  add100: PropTypes.func.isRequired,
  increase: PropTypes.func.isRequired,
};
