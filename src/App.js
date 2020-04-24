import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    count: 0,
  }

  clickOnButton = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  }

  render() {
    return (
      <>
        <h1 className="header">{`Count: ${this.state.count}`}</h1>
        <button type="submit" onClick={this.clickOnButton} className="button">
          Add one
        </button>
      </>
    );
  }
}

export default App;
