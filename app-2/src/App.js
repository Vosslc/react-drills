import React, { Component } from "react";
import logo from "./logo.svg";
import beer from "./beer.png"

import "./App.css";


class App extends Component {

  constructor(){
    super();

    this.state = {
      beerStyles: ['ipa', 'stout', 'pilsner','porter']
    }
  }



  render() {
    let beersOnList = this.state.beerStyles.map((element, index) => {
      return <h2 key={index}>{element}</h2>;
    })
    
    return (
      <div className="App">
        <div className="App-header">
          <img src={beer} className="App-logo" alt="logo" />
          <h1>List of Beer Styles</h1>
        </div>
        
        <p className="App-beers">
          <div className="App">{beersOnList}</div>
        </p>
      </div>
    );
  }
}

export default App;
