import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import ImgComp from './ImgComp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ImgComp url={'https://hollywoodsuite.ca/wp-content/uploads/2016/07/not-worthy.gif'}/>
        <div>“We’re not worthy… we’re not worthy!” —Wayne and Garth to Alice Cooper</div>
      </div>
    );
  }
}

export default App;
