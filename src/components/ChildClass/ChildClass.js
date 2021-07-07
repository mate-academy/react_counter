import React from 'react';

export class ChildClass extends React.PureComponent {
  componentDidMount() {
    // eslint-disable-next-line no-console
    console.log('Mounted');
  }

  componentDidUpdate() {
    // eslint-disable-next-line no-console
    console.log('Updated');
  }

  componentWillUnmount() {
    // eslint-disable-next-line no-console
    console.log('Unmounted');
  }

  render() {
    // eslint-disable-next-line no-console
    console.log('rendering');

    return (
      <h2>Child Class</h2>
    );
  }
}
