import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };
  }

  increase = () => {
    this.setState(state => (
      { count: state.count + 1 }
    ));
  }

  render() {
    return (
      <>
        <h1>
          Count:
          {' '}
          {this.state.count}
        </h1>

        <button type="button" className="button" onClick={this.increase}>
          Increase by 1
        </button>
      </>
    );
  }
}

export default App;
