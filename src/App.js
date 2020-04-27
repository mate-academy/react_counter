import React from 'react';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

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
          {`Count: ${this.state.count}`}
        </h1>
        <button type="button" onClick={this.increase}>
          Plus One
        </button>
      </>
    );
  }
}

export default App;
