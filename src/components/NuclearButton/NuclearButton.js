import React from 'react';
import './nuclearButton.css'

class NuclearButton extends React.Component {
  constructor() {
    super();

    this.state = {
      clickCounter: 100,
    }
  };

  clicker = () => {
    this.setState(() => ({
      clickCounter: this.state.clickCounter -1,
    }));
  };

  render() {
    return (
      <div className="wrapper">
        <button className="nuclear-button" type="button" onClick={this.clicker}>
          {this.state.clickCounter}
        </button>
      </div>
    );
  };
};

export default NuclearButton;
