import React, { Component } from 'react';

class ImgComp extends Component {
  render() {
    return (
      <div>
        <img src={this.props.url}/>
        
      </div>
    );
  }
}

export default ImgComp;