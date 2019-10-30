import React, {Component} from 'react'



export default class Login extends Component{
  constructor(){
    super()
    this.state = {
      userName: '',
      password: ''
    };
  }

handleUserNameChange(name){
  this.setState({userName: name})
}

handlePasswordChange(pass){
  this.setState({password: pass})
}

handleLogin(){
  alert(`Username: ${this.state.userName} and Password: ${this.state.password}`)
}

  render(){
    return(
      <div>
        <input onChange={e => this.handleUserNameChange(e.target.value)} type="text" placeholder="USERNAME"/>
        <input onChange={e => this.handlePasswordChange(e.target.value)} type="text" placeholder="PASSWORD"/>
        <button onClick={bind => this.handleLogin(bind)}>Login</button>
      </div>
    )
  }
}

