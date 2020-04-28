import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    count: 0,
  }

  clickingOnTheButton = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  }

  render() {
    return (
      <>
        <h1 className="title">{`Count: ${this.state.count}`}</h1>
        <button
          className="button"
          type="submit"
          onClick={this.clickingOnTheButton}
        >
          Push the button
        </button>
      </>
    );
  }
}

export default App;
