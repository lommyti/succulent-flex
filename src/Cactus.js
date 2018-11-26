import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Cactus extends Component {
  render() {
    const adjustment = {
      transform: "rotate(-" +  (this.props.leafNum * 45)  + "deg) translate(0," + this.props.leafNum + "px)",
      zIndex: -this.props.leafNum,
      animationDelay: this.props.leafNum/10 + "s"
    }
    return (
      <div className="leaf-container">
      <div className="leaf cactus" style={adjustment}>
        <div className="cactus-inside"></div>
        <div className="cactus-line cactus-line-1"></div>
        <div className="cactus-line cactus-line-2"></div>
        <div className="cactus-line cactus-line-3"></div>
      </div>
      </div>
    );
  }
}

export default Cactus;
