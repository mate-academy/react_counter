import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    count: 0,
  };

  render() {
    return (
      <>
        <h1>
          Count:
          {this.state.count}
        </h1>
        <button
          type="button"
          onClick={() => {
            this.setState(prevState => ({
              count: prevState.count + 1,
            }));
          }}
        >
          push
        </button>
      </>
    );
  }
}

export default App;
