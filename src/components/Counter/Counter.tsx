import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Props {
  count: number;
  addOne: () => void;
  add100: () => void;
  increase: () => void;
}

export const Counter: React.FC<Props> = ({
  count,
  addOne,
  add100,
  increase,
}) => (
  <>
    <h1 className="mb-3">
      {`Count: ${count}`}
    </h1>
    <div>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={addOne}
      >
        Add One
      </button>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={add100}
      >
        Add 100
      </button>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={increase}
      >
        Increase
      </button>
    </div>
  </>
);
