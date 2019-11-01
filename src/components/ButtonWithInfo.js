import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ButtonWithInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
    };

    this.updateClicked = this.updateClicked.bind(this);
  }

  updateClicked() {
    this.setState({
      clicked: true,
    });
  }

  render() {
    const { clicked } = this.state;
    const { label } = this.props;
    console.log(clicked);
    return (
      <>
        <button type="button" onClick={this.updateClicked}>{label}</button>
        <br />
        <br />
        <span>{clicked ? 'Already clicked' : 'Not clicked'}</span>
      </>
    );
  }
}

ButtonWithInfo.propTypes = {
  label: PropTypes.string.isRequired,
};

export default ButtonWithInfo;
