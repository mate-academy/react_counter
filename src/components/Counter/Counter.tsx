import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

type Props = {
  count: number;
  addOne: () => void;
  add100: () => void;
  increase: () => void;
  reset: () => void;
};

export const Counter: React.FC<Props> = (props) => {
  const {
    count,
    addOne,
    add100,
    increase,
    reset,
  } = props;

  return (
    <section className="d-flex justify-content-center align-items-center">
      <h1 className="me-5">
        {'Count: '}
        {count}
      </h1>

      <button
        className="me-2 col col-lg-2 p-1 border-0 rounded shadow-sm btn btn-outline-secondary"
        type="button"
        onClick={addOne}
      >
        Add one
      </button>

      <button
        className="me-2 col col-lg-2 p-1 border-0 rounded shadow-sm btn btn-outline-secondary"
        type="button"
        onClick={add100}
      >
        Add 100
      </button>

      <button
        className="me-2 col col-lg-2 p-1 border-0 rounded shadow-sm btn btn-outline-secondary"
        type="button"
        onClick={increase}
      >
        Increase
      </button>

      <button
        className="col col-lg-2 p-1 border-0 rounded shadow-sm btn btn-outline-secondary"
        type="button"
        onClick={reset}
      >
        Reset
      </button>
    </section>
  );
};
