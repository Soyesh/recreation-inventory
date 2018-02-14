// App.jsx
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter'

class App extends Component {
    state = {
        count: 0
    }

    onIncrement = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    onDecrement = () => {
        this.setState({
            count: this.state.count - 1
        })
    }
  render() {
    return (
      <div className="App">
        <Counter count={this.state.count} onIncrement={this.onIncrement} onDecrement={this.onDecrement} />
      </div>
    );
  }
}

export default App;