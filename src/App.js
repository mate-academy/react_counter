import React from 'react';
import './App.css';

const App = () => (
  <Counter />
);

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementClick = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  }

  render() {
    return (
      <>
        <h1 className="counterTitle">
          Count:
          <span>
            {this.state.count}
          </span>
        </h1>
        <button
          type="button"
          className="counterButton"
          onClick={this.incrementClick}
        >
          Counter + 1
        </button>
      </>
    );
  }
}

export default App;
