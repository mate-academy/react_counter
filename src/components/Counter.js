import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.changeCount = this.changeCount.bind(this);
  }

  changeCount() {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }

  render() {
    const { label } = this.props;
    const { count } = this.state;
    return (
      <>
        <button type="button" onClick={this.changeCount}>
          {label}
        </button>
        <div>{`Count: ${count}`}</div>
      </>
    );
  }
}

Counter.propTypes = {
  label: PropTypes.string,
};

Counter.defaultProps = {
  label: 'дуфаулт жмакаем',
};

export default Counter;
