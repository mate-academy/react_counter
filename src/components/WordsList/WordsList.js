import React from 'react';
import PropTypes from 'prop-types';

export const WordsList = React.memo(
  ({ words, onReset }) => {
    // eslint-disable-next-line no-console
    console.log('rendering WordsList');

    return (
      <>
        <ul className="wordsList">
          {words.map(word => (
            <li key={word}>
              {word}
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={onReset}
        >
          Reset
        </button>
      </>
    );
  },
);

WordsList.propTypes = {
  words: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequired,
};
