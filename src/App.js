import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    count: 0,
  };

    counter = () => {
      this.setState(prevState => ({
        count: prevState.count + 1,
      }));
    };

    render() {
      return (
        <>
          <h1>
            {`Count: ${this.state.count}`}
          </h1>

          <button
            onClick={this.counter}
            type="button"
            className="button"
          >
            Click me!
          </button>
        </>
      );
    }
}

export default App;
