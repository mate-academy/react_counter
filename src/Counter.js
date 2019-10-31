import React from 'react';

class ButtonWithInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  updateCounter = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <>
        <span>Count: {this.state.count}</span>
        <br />
        <button onClick={this.updateCounter}>Click</button>
      </>
    );
  }
}

export default ButtonWithInfo;
