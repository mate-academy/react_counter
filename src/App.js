import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  clickHandler = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }


  render() {
    return (
      <div>
        <div>Count: {this.state.count}</div>
        <button onClick={this.clickHandler}>Increment Count</button>
      </div>
    );
  }
}

export default App;
