import React from 'react';
import './App.scss';
type State = {
  counter: number,
}

class App extends React.Component<{}, State> {
  state: State = {
    counter: 0,
  }

  addOne = () => {
    this.setState((state) => ({
        counter: state.counter + 1,
      }));
  };

  add100 = () => {
    this.setState((state) => ({
      counter: state.counter + 100,
    }))
  };

  increase = () => {
    this.setState((state) => {
    if (state.counter %5 === 0) {
      return {
        counter: state.counter + 101,
      }
    } else {
      return {
        counter: state.counter + 1,
      }
    }
    })
  }
  
  reset = () => {
    this.setState({
      counter: 0,
    })
  };

  render() {
    const { counter } = this.state;
    return (
      <>
        <div className="box">
          <h1 className="title">Count: {counter}</h1>
          <button className="button is-link is-outlined" onClick={this.addOne}>Add 1</button>
          <button className="button is-link is-outlined" onClick={this.add100}>Add 100</button>
          <button className="button is-link is-outlined" onClick={this.increase}>Increase</button>
          <button className="button is-link is-outlined" onClick={this.reset}>Reset</button>
          <progress className="progress is-primary" value={counter} max={counter + 200}></progress>
          <div className="notification is-danger is-light">
          <button className="delete"></button>
          <p className="mainText">It`s recommended not to overload the system! <br/><strong>Please stop it!</strong><br/>If You managed to reach THE END - you will get a prize!!!<br/><a href='mailto:andreysamaev@gmail.com' >MAIL FOR THE PRIZE</a></p>
        </div>
        </div>
      </>
    )
  }
}

export default App;
