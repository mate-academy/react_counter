import React from 'react';
interface State {
  number: number
}
export class Counter extends React.Component {
  state:State = {
    number: 0,
  };

  addOne = () => this.setState((prevState:State) => ({number: prevState.number + 1,}));

  add100 = () => this.setState((prevState:State) => ({number: prevState.number + 100}));

  increase = () => this.setState((prevState:State) => ({number: prevState.number + (prevState.number % 5 === 0 ? 101 : 1)}));
  
  render() {
    return (
      <div className="counter">
        <h1 className="counter__value">{this.state.number}</h1>
        <button type='button' className="counter__button" onClick={this.addOne}>+1</button>
        <button type='button' className="counter__button" onClick={this.add100}>+100</button>
        <button type='button' className="counter__button" onClick={this.increase}>increase</button>
      </div>
    );
  }
}
