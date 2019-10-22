import React, {Component} from 'react'

class TextBar extends Component {
    constructor(){
        super();
        this.state = {
            message: ""
        };
    }
    handleChange = (event) => {
        console.log(event)
            this.setState({ message: event });
    }
        
        render() {
            return (
            <div className="App">
                <input onChange={e => this.handleChange(e.target.value)} type="text" />
                
                <p>{this.state.message}</p>
            </div>
            );
        }
}

export default TextBar
