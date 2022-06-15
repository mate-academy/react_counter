import React from 'react';
import './Counter.scss';
import classNames from 'classnames';

type Props = {
  count: number;
  addOne: () => void;
  add100: () => void;
  increase: () => void;
};

export const Counter: React.FC<Props> = ({
  count, addOne, add100, increase,
}) => {
  const getKopiykasCase = (number: number) => {
    const lastChar = String(number).slice(-1);
    const twoLastChars = String(number).slice(-2);
    const trickyChars = ['11', '12', '13', '14'];

    if (lastChar === '1' && !trickyChars.includes(twoLastChars)) {
      return 'копійку';
    }

    if ('234'.includes(lastChar) && !trickyChars.includes(twoLastChars)) {
      return 'копійки';
    }

    return 'копійок';
  };

  return (
    <div className="level">
      <div className="text-content">
        <h1 className="title level-left">
          How much should this project cost on freelance?
        </h1>
        <p className={classNames(
          'has-text-centered', {
            'is-size-1 has-background-success': count >= 2000,
            'is-size-2 has-background-primary': count < 2000 && count >= 1500,
            'has-text-link': count >= 1500,
            'has-background-info is-size-3': count < 1500 && count >= 1000,
            'is-size-4': count < 1000,
            'has-background-warning': count >= 500 && count < 1000,
            'has-background-danger': count < 500,
          },
        )}
        >
          {`${count} ${getKopiykasCase(count)}`}
        </p>
      </div>
      <div className="level-right buttons">
        <button
          type="button"
          className="
            button
            is-info
            is-medium"
          onClick={() => addOne()}
        >
          Add One
        </button>
        <button
          type="button"
          className="
            button
            is-info
            is-medium"
          onClick={() => add100()}
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
          onClick={() => increase()}
        >
          Increase
        </button>
      </div>
    </div>
  );
};
