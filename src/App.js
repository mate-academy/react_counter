import React from 'react';
import './App.css';
class App extends React.Component {
  state = {
    counter: 0,
  };

  handleClick = () => (
    this.setState(prevState => ({
    counter: prevState.counter + 1,
    }))
  );

  render() {
    return (
      <div>
        <div className="resultValue">Count: {this.state.counter}</div>
        <button className="btn" onClick={this.handleClick}>Click me!</button>
    </div>
    );
  }
}

export default App;
