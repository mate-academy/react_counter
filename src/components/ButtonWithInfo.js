import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ButtonWithInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };

    this.updateClicked = this.updateClicked.bind(this);
  }

  updateClicked() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  render() {
    const { counter } = this.state;
    const { label } = this.props;
    console.log(counter);
    return (
      <>
        <button type="button" onClick={this.updateClicked}>{label}</button>
        <br />
        <span>
          You have been clicked :
          {' '}
          {counter}
          {' '}
          times
        </span>
      </>
    );
  }
}

ButtonWithInfo.propTypes = {
  label: PropTypes.string.isRequired,
};

export default ButtonWithInfo;
