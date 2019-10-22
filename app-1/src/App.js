import React, {Component} from 'react'
import "./App.css";

class App extends Component{
  constructor(){
    super();
    this.state = {
      message: ''
    }
  }

handleChange(value){
  this.setState({message: value})
}

  render(){
    return(
      <div className="Body">

      <input onChange={(e) => this.handleChange(e.target.value)} type='text'/>
      <p>{this.state.message}</p>
      </div>
    )

  }

  
}


export default App;





















// import React, { Component } from "react";
// import logo from "./logo.svg";
// import "./App.css";
// import TextBar from "./Component/TextBar";

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>React Drill Problem 1</h2>
//         </div>
//         <p className="App-intro">
//         Create a basic react app where you type in a text box and it shows up as text on the DOM
//         </p>
//         <hr />
//         <hr />
//         <TextBar />
//         <hr />
//       </div>
//     );
//   }
// }


// export default App;