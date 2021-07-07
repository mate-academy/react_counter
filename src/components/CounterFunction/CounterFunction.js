import React, { useState, useMemo, useCallback } from 'react';
// import { ChildClass } from '../ChildClass/ChildClass';
// import { Child } from '../Child/Child';
import { UserDetails } from '../UserDetails/UserDetails';
import { WordsList } from '../WordsList/WordsList';

const colors = ['red', 'blue', 'yellow', 'green', 'lime', 'black', 'grey'];

const debounce = (f, delay) => {
  let timerId;

  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(f, delay, ...args);
  };
};

export const CounterFunction = () => {
  const [count, setCount] = useState(0);
  const [userId, setUserId] = useState(0);
  const [query, setQuery] = useState('');
  const [appliedQuery, setAppliedQuery] = useState('');

  const getVisibleColor = () => {
    // eslint-disable-next-line no-console
    console.log(`Filtering with ${appliedQuery}`);

    return colors.filter(color => color.includes(appliedQuery));
  };

  const getVisibleColors = useMemo(
    getVisibleColor,
    [colors, appliedQuery],
  );

  // eslint-disable-next-line arrow-body-style
  const reset = useCallback(() => {
    setQuery('');
  }, []);

  const apllyQuery = useCallback(
    debounce(setAppliedQuery, 1000),
    [],
  );

  return (
    <>
      <label>
        Color
        <input
          type="text"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            apllyQuery(event.target.value);
          }}
        />
      </label>

      <WordsList words={getVisibleColors} onReset={reset} />

      <button
        type="button"
        onClick={() => setCount(count + 1)}
      >
        {`${count} ++`}
      </button>

      <h2>Select a User</h2>
      <button type="button" onClick={() => setUserId(1)}>
        user 1
      </button>
      <button type="button" onClick={() => setUserId(2)}>
        user 2
      </button>
      <button type="button" onClick={() => setUserId(3)}>
        user 3
      </button>
      <button type="button" onClick={() => setUserId(0)}>
        clear
      </button>

      {(userId > 0) && (
        <UserDetails userId={userId} />
      )}
    </>
  );
};
