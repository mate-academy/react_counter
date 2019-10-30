import React from 'react';
import './App.css';

function App() {
  return <Click />
}
class Click extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }
  
  clickCounter  = () => {
    this.setState(prev => ({
      ...prev,
      counter: prev.counter + 1,
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.clickCounter}>button</button>
        <p>was clicked: {this.state.counter}</p>
      </div>
  )};
}

export default App;
