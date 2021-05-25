import React from 'react';
import Counter from './components/Counter';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <Counter />
    );
  }
}

export default App;
