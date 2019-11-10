import React, { Component } from "react";
import "./App.css";
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        starWars: '',
        planet: ''
      }
  }
  
  componentDidMount(){
    axios.get('https://swapi.co/api/people/1')
    .then(res => {
      this.setState({
        starWars: res.data
      });
    }),
    axios.get("https://swapi.co/api/planets/1/")
    .then(res => {
      this.setState({
        planet: res.data
      });
    })
  }



  render() {
    return (
      <div className="App">
        <h1>Name: {this.state.starWars.name}</h1>
        <h2>Hair_color: {this.state.starWars.hair_color}</h2>
        <h2>birth_year: {this.state.starWars.birth_year}</h2>
        <h2>planet: {this.state.planet.name}</h2>
        
      </div>
    );
  }
}

export default App;
