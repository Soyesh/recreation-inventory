import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Components/AddItem'

class App extends Component {

  render() {
    return (
      <div className="">
        Base Page
        {/* We will configure Routes here */}
        <Login />
      </div>
    );
  }
}

export default App;
