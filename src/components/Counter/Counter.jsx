import React from 'react';
import classNames from 'classnames';

const buttonsName = ['add 1', 'add 100', 'mix and devide 5'];

export class Counter extends React.Component {
    state = {
      counter: 0,
      buttons: buttonsName,
    };
  
    checkButton = (buttonName) => {
      if (buttonName === this.state.buttons[0]) {
        this.addOne();
      } else if (buttonName === this.state.buttons[1]) {
        this.add100();
      } else if (buttonName === this.state.buttons[2]) {
        this.increase();
      }
    }

    addOne = () => {
      this.setState(state => ({
        counter: state.counter + 1,
      }));
    };

    add100 = () => {
      this.setState(state => ({
        counter: state.counter + 100,
      }));
    };
  
    increase = () => {
      this.addOne();
      if (this.state.counter % 5 === 0) {
        this.add100();
      }
    };
  
    render() {
      return (
        <div className="section">
          <h1 className="section__header-title">{`Counter: ${this.state.counter}`}</h1>
          {
            buttonsName.map((buttonName, index) => (
              <button
                type="button"
                className={classNames("section__button", {
                  'section__button-clicked':buttonName === buttonsName[index]
                })}
                onClick={() => {
                  this.checkButton(buttonName);
                }}
              >
                {buttonName}
              </button>
            ))
          }
        </div>
      );
  }
}

