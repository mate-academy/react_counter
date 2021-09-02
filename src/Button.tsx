import React from 'react';
import './Counter.scss';

type Props = {
  action: () => void;
  text: string;
};

export const Button: React.FC<Props> = (props) => {
  const { action, text } = props;

  return (
    <button
      type="button"
      className="Counter__button"
      onClick={action}
    >
      {text}
    </button>
  );
};
