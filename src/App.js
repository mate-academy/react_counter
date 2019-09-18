import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }
  handleClick = () => {
    this.setState((prevState) => ({counter: prevState.counter + 1})
    );
  }

  render () {
    return (
      <>
        <button
          id="btn"
          onClick={this.handleClick}
          type="button"
        >Click ME</button>
        <div className="digital-block">count = {this.state.counter}</div>
      </>
    );
  }
}

export default App;
