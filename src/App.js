import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  additionClick = () => {
    this.setState(state => ({
      count: state.count + 1,
    }));
  }

  render() {
    const { count } = this.state;

    return (
      <>
        <h1>
          Count:
          {count}
        </h1>
        <button type="submit" onClick={this.additionClick}>
          Click me!
        </button>
      </>
    );
  }
}

export default App;
