import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    count : 0,
  };

  clickFunc() {
    this.setState({
      count: this.state.count + 1
    })
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
          onClick={() => this.clickFunc()}
          className="positive ui button"
        >
          Click me !
        </button>
      </div>
    );
  }
}

export default App;
