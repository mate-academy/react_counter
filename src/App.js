import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clickCounter: 0,
    }
  }

  render() {

    return (
      <div className="main">
        <div className="number-window">{this.state.clickCounter}</div>
        <button class="ui animated button"
          onClick={() => this.setState({clickCounter: this.state.clickCounter + 1})}>
          <div class="visible content">Click</div>
          <div class="hidden content"><i aria-hidden="true" class="arrow right icon"></i></div>
        </button>
      </div>
    )
  }
}

export default App;
