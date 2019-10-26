import React from 'react';
import { Button } from 'semantic-ui-react';

class Counter extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      clickCounter: 0,
    };
  }

  buttonClick() {
    this.setState((prevState) => {
      return {
        ...prevState,
        clickCounter: prevState.clickCounter + 1,
      };
    });
  }

  render() {
    const { clickCounter } = this.state;
    const buttonClick = this.buttonClick.bind(this);

    return (
      <>
        <div>
          You clicked on button {clickCounter} times
        </div>
        <Button secondary onClick={buttonClick}>
          Click me
        </Button>
      </>
    );
  }
}

export default Counter;
