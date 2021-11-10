import React from 'react';

interface Props {
  counter: number,
  incraseValue: (param:string) => void
}

export const Counter: React.FC<Props> = ({ counter, incraseValue }) => {
  return (
    <div>
      <h1>
        {counter}
      </h1>
      <button
        type="button"
        onClick={() => {
          incraseValue('addOne');
        }}
      >
        addOne
      </button>
      <button
        type="button"
        onClick={() => {
          incraseValue('add100');
        }}
      >
        add100
      </button>
      <button
        type="button"
        onClick={() => {
          incraseValue('increase');
        }}
      >
        increase
      </button>
    </div>
  );
};
