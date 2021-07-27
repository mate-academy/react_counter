import React from 'react';
import './App.scss';
import { Button } from './Button';

class App extends React.Component {
  state = {
    count: 0,
  }

  addOne = () => {
    this.setState(state => ({
      count: state.count + 1,
    }));
  };

  add100 = () => {
    this.setState(state => ({
      count: state.count + 100,
    }));
  };

  increase = () => {
    this.addOne();
    if (this.state.count % 5 === 0 && this.state.count) {
      this.add100();
    }
  };

  render() {
    const { addOne, add100, increase } = this;
    const { count } = this.state;

    return (
      <div className="wrapper">
        <h1 className="title">{`Count: ${count}`}</h1>
        <div className="button__wrapper">
          <Button
            className="button"
            type="button"
            name="addOne"
            onClick={addOne}
          />
          <Button
            className="button"
            type="button"
            name="add100"
            onClick={add100}
          />
          <Button
            className="button"
            type="button"
            name="increase"
            onClick={increase}
          />
        </div>

      </div>
    );
  }
}

export default App;
