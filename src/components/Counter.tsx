import React from 'react';
import { Button } from 'react-bootstrap';

type Props = {
  count: number,
  addOne: () => void,
  add100: () => void,
  increase: () => void,
};

export const Counter: React.FC<Props> = (props) => {
  const {
    count,
    addOne,
    add100,
    increase,
  } = props;

  return (
    <div className="App">
      <h1>
        Count:
        {' '}
        {count}
      </h1>
      <Button
        className="App__button"
        variant="outline-dark"
        type="button"
        onClick={addOne}
      >
        Add 1
      </Button>
      <Button
        className="App__button"
        variant="outline-dark"
        type="button"
        onClick={add100}
      >
        Add 100
      </Button>
      <Button
        className="App__button"
        variant="outline-dark"
        type="button"
        onClick={increase}
      >
        Increase
      </Button>
    </div>
  );
};
