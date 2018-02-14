import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Counter extends Component {
  render() {//display
    var count = this.props.count
    return (
      <div className="App-Counter">
        {count}
        <input type="number" value={this.props.countInputValue} onChange={this.props.changeEvent}/>
        <button onClick={this.props.onIncrement}>Increment</button>
        <button onClick={this.props.onDecrement}>Decrement</button>
      </div>
    );
  }
}

export default Counter;