import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';

export const UserDetails = ({ userId }) => {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('Mounted');

    return () => {
      // eslint-disable-next-line no-console
      console.log('Unmounted');
    };
  }, []);

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(`Loading user ${userId} ...`);

    return () => {
      // eslint-disable-next-line no-console
      console.log('Clearing');
    };
  }, [userId]);

  const token = useMemo(() => (
    Math.random()
  ), [userId]);

  return (
    <div>
      <h2>{`User ${userId}`}</h2>
      {token}
    </div>
  );
};

UserDetails.propTypes = {
  userId: PropTypes.number.isRequired,
};
