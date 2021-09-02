import React from 'react';
import './Button.scss';

type Props = {
  buttonName: string;
  action: () => void;
};

export const Button: React.FC<Props> = (props) => {
  const { buttonName, action } = props;

  return (
    <button
      type="button"
      onClick={action}
      className="button buttons__button"
    >
      {buttonName}
    </button>
  );
};
