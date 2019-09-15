import React from 'react';
import './App.css';

// eslint-disable-next-line standard/object-curly-even-spacing


class App extends React.Component {
  constructor(props) {
    super(props);
    // eslint-disable-next-line no-this-before-super
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      clicks: 0,
      show: true
    };
  }

  // eslint-disable-next-line class-methods-use-this
  IncrementItem = () => {
    this.setState(prevState => ({
      clicks: prevState.clicks + 1,
    }));
  }

  render() {
    return (
      <>
        <button onClick={() => this.IncrementItem()} type="button">Click me!</button>
        <div>Count: {this.state.clicks}</div>
      </>
    );
  }
}

export default App;
