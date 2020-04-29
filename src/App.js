import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    count: 0,
  }

  buttonClick = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  }

  render() {
    return (
      <>
        <h1 className="count__header">
          Count:
          {' '}
          {this.state.count}
        </h1>
        <button
          type="submit"
          className="count__button"
          onClick={this.buttonClick}
        >
          Count++
        </button>
      </>
    );
  }
}

export default App;
