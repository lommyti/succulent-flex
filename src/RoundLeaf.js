import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class RoundLeaf extends Component {
  render() {
    const adjustment = {
      paddingTop: (Math.max(this.props.leafNum, 15)/2) + "px",
      width: Math.max(this.props.leafNum, 15) + "px",
      transform: "rotate(-" + ((8*Math.random())+ (this.props.leafNum * 80))  + "deg) translate(0," + Math.pow(this.props.leafNum, 1.2)/2 + "px)",
      zIndex: -this.props.leafNum,
      animationDelay: this.props.leafNum/10 + "s"
    }
    return (
      <div className="leaf-container">
      <div className="leaf roundleaf" style={adjustment}>
      </div>
      </div>
    );
  }
}

export default RoundLeaf;
