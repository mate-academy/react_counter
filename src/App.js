import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    count : 0,
  };

  handleClick() {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  }

  render() {
    const { count } = this.state;
    return (
      <div className="block">
        <div className="count-block">
          <p>
            Clicked
          </p>
          <p>
            { count }
          </p>
        </div>
        <button
          onClick={() => this.handleClick()}
          className="positive ui button"
        >
          Click me !
        </button>
      </div>
    );
  }
}

export default App;
