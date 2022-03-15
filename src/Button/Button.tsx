import React from 'react';
import './Button.scss';

type Props = {
  buttonName: string;
  action: () => void;
};

export const Button: React.FC<Props> = (props) => {
  const { buttonName, action } = props;
  // eslint-disable-next-line
  console.log('Button');

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
