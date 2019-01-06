import React, { Component } from 'react';

export default class ColorBox extends Component {
  
  render() {
    
    return (
      // if (this.props.opacity >= 0.2){
      //   let opa = this.props.opacity;
      //   opa=opa-0.1;
        <div className="color-box" style={{opacity: this.props.opacity}}>
          
            {this.props.opacity >= 0.2 ? <ColorBox opacity={this.props.opacity - 0.1} /> : null}
          
        </div>
      
        
      )
}
}
