import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  counterAdd = () => {
    this.setState(state => ({ count: state.count + 1 }));
  }

  render() {
    return (
      <>
        <h1>
          Count:
          {this.state.count}
        </h1>
        <button type="button" onClick={this.counterAdd}>Count</button>
      </>
    );
  }
}

export default App;
