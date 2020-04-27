import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    count: 0,
  }

  handleClick = () => {
    this.setState(state => ({
      count: state.count + 1,
    }));
  }

  render() {
    return (
      <div className="count-block">
        <h1>
          Count:
          <span className="text-warning">{this.state.count}</span>
        </h1>

        <button
          type="button"
          onClick={this.handleClick}
          className="btn btn-primary"
        >
          Click me
        </button>
      </div>
    );
  }
}

export default App;
