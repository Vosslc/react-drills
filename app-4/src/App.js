import React, { Component } from "react";
import "./App.css";
import Login from './controllers/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login />
      </div>
    );
  }
}

export default App;
