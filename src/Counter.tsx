import React from 'react';
import './Counter.scss';
import classNames from 'classnames';
import { getKopiykasCase } from './functions/getKopiykasCase';
import { getClassNameByCount } from './functions/getClassNameByCount';

type Props = {
  count: number;
  addOne: () => void;
  add100: () => void;
  increase: () => void;
};

export const Counter: React.FC<Props> = ({
  count, addOne, add100, increase,
}) => {
  return (
    <div className="level">
      <div className="text-content">
        <h1 className="title level-left">
          How much should this project cost on freelance?
        </h1>
        <p className={`has-text-centered ${getClassNameByCount(count)}`}>
          {`${getKopiykasCase(count)}`}
        </p>
      </div>
      <div className="level-right buttons">
        <button
          type="button"
          className="
            button
            is-info
            is-medium"
          onClick={addOne}
        >
          Add One
        </button>
        <button
          type="button"
          className="
            button
            is-info
            is-medium"
          onClick={add100}
        >
          Add 100
        </button>
        <button
          type="button"
          className={classNames(
            'button is-medium', {
              'is-success': count % 5 === 0,
              'is-info': count % 5 !== 0,
            },
          )}
          onClick={increase}
        >
          Increase
        </button>
      </div>
    </div>
  );
};
