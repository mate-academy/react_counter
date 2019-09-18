import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    counter: 0
  }

  handleClick = () => {
    this.setState((prevState) => ({counter: prevState.counter + 1})
    );
  }

  render () {
  const {counter} = this.state;
    return (
      <>
        <button
          id="btn"
          onClick={this.handleClick}
          type="button"
        >Click ME</button>
        <div className="digital-block">count={counter}</div>
      </>
    );
  }
}

export default App;
