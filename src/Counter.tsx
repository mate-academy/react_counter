import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

type Props = {
  count: number;
  addOne: () => void;
  add100: () => void;
  increase: () => void;
};

export const Counter: React.FC<Props> = (props) => {
  const {
    count,
    addOne,
    add100,
    increase,
  } = props;

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h1 className="col">
        {'Count: '}
        {count}
      </h1>

      <button
        className="col-2 m-2 py-2 border-0 border-secondary rounded"
        type="button"
        onClick={addOne}
      >
        Add one
      </button>

      <button
        className="col-2 m-2 py-2 border-0 border-secondary rounded"
        type="button"
        onClick={add100}
      >
        Add 100
      </button>

      <button
        className="col-2 m-2 py-2 border-0 border-secondary rounded"
        type="button"
        onClick={increase}
      >
        Increase
      </button>
    </div>
  );
};
