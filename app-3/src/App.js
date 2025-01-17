import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(){
    super() 
    this.state = {
      filterString : "",
      beerList : [ "IPA", "Porter", "Pale", "Plisner", "Stout"]
    };
    

  };

handleChange(filter){
  this.setState({ filterString: filter });
}




  render() {
    const {filterString, beerList} = this.state;
    let beerDisplay = beerList.filter(element => {
        return element.includes(filterString)
      })
      .map((element, index) => {
        return <h2 key={index}> {element}</h2>
      });
      
    return (
      <div className="App">
        <input onChange = {e => this.handleChange(e.target.value)} type="text"/>
        {beerDisplay}
      </div>
    );
  }
}

export default App;
