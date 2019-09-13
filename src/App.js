import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }
   handleFunc = () => {
    this.setState((prevState) => {

      return {
        counter: prevState.counter + 1,
      }
    });
  }

  render () {
    return (
      <>
        <button id="btn" onClick={this.handleFunc} type="button">Click ME</button>
        <div className="digital">count = {this.state.counter}</div>
      </>
    );
  }
}

export default App;
