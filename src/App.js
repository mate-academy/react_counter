import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    count: 0,
  };

  handleClick() {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  }

  render() {
    let { count } = this.state;
    return (
      <div className="main">
        <button
          onClick={() => this.handleClick()}
          type="button"
          className="btn btn-primary btn-lg">
          Count
        </button>
        <div className="counter">
          Count {count}
        </div>
      </div>
    );
  }
}

export default App;
