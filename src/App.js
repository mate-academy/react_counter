import React from 'react';
import './App.scss';
import { Button } from './components/Button';

class App extends React.Component {
  state = {
    number: 0,
  };

  addOne = () => {
    this.setState(prevState => ({ number: prevState.number + 1 }));
  };

  add100 = () => {
    this.setState(prevState => ({ number: prevState.number + 100 }));
  };

  increase = () => {
    if ((this.state.number % 5) === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    const { number } = this.state;

    return (
      <div className="App">
        <h1>
          {`Count: ${number}`}
        </h1>

        <Button onClick={this.addOne} text="Add 1" />
        <Button onClick={this.add100} text="Add 100" />
        <Button onClick={this.increase} text="Increase" />
      </div>
    );
  }
}

export default App;
