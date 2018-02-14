// Counter.jsx

import React, { Component } from 'react';

class Counter extends Component {
    
  render() {
    return (
      <div>
        {this.props.count}
        <button onClick={this.props.onIncrement}>Increment</button>
        <button onClick={this.props.onDecrement}>Decrement</button>
      </div>
    );
  }
}

export default Counter;