import React from 'react';
import './Button.scss';

interface Props {
  name: string,
  callback: () => void,
}

export class Button extends React.PureComponent<Props, {}> {
  render() {
    const { name, callback } = this.props;

    return (
      <button
        className="Button"
        type="button"
        onClick={callback}
      >
        {name}
      </button>
    );
  }
}
