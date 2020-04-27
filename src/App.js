import React from 'react';
import './App.css';

const App = () => (
  <>
    <Count />
  </>
);

class Count extends React.Component {
  state = {
    count: 0,
  }

  increase = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }

  render() {
    return (
      <>
        <h1>
          Count:
          {this.state.count}
        </h1>
        <button
          type="button"
          className="btn"
          onClick={this.increase}
        >
          Click me
        </button>
      </>
    );
  }
}

export default App;
