import React from 'react';
import './Counter.scss';

type Props = {
  count: number;
  addOne: () => void;
  add100: () => void;
  increase: () => void;
};

export const Counter: React.FC<Props> = ({
  count, addOne, add100, increase,
}) => {
  const getCountClasses = () => {
    if (count >= 2000) {
      return 'has-text-link is-size-1 has-background-success';
    }

    if (count >= 1500) {
      return 'has-text-link is-size-2 has-background-primary';
    }

    if (count >= 1000) {
      return 'has-background-info is-size-3';
    }

    if (count >= 500) {
      return 'has-background-warning is-size-4';
    }

    return 'has-background-danger is-size-4';
  };

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
        <p className={`
          has-text-centered
          ${getCountClasses()}`}
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
          className={`
            button
            is-medium
            ${count % 5 === 0 ? 'is-success' : 'is-info'}
          `}
          onClick={() => increase()}
        >
          Increase
        </button>
      </div>
    </div>
  );
};
