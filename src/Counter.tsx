import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

type Props = {
  count: number;
  addOne: () => void;
  add100: () => void;
  increase: () => void;
};

export const Counter: React.FC<Props> = ({
  count,
  addOne,
  add100,
  increase,
}) => (
  <>
    <h1>
      {'Count: '}
      {count}
    </h1>
    <div
      className="btn-group"
      role="group"
      aria-label="Basic mixed styles example"
    >
      <button
        type="button"
        className="btn btn-danger"
        onClick={addOne}
      >
        Add 1
      </button>
      <button
        type="button"
        className="btn btn-warning"
        onClick={add100}
      >
        Add 100
      </button>
      <button
        type="button"
        className="btn btn-success"
        onClick={increase}
      >
        Some magic
      </button>
    </div>
  </>
);
