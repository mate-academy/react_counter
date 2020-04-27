import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    count: 0,
  }

  more = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  }

  render() {
    return (
      <>
        <button type="button" onClick={this.more}>More</button>
        <h1>
          Count:
          {this.state.count}
        </h1>
      </>
    );
  }
}

export default App;
