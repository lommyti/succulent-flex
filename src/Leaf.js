import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Leaf extends Component {
  render() {
    const adjustment = {
      paddingTop: Math.min(Math.pow(this.props.leafNum, 1.2), 35) + "px",
      width: Math.max(Math.pow(this.props.leafNum, 0.85), 15) + "px",
      transform: "rotate(" + ((8*Math.random())+ (this.props.leafNum * 34))  + "deg) translate(0," + Math.pow(this.props.leafNum, 1.2)/2 + "px)",
      zIndex: -this.props.leafNum,
      animationDelay: this.props.leafNum/10 + "s"
    }
    const tipWidth = {
      width: Math.max(Math.pow(this.props.leafNum, 0.85), 15) + "px",
      opacity: Math.min(this.props.leafNum-5, 1),
    }
    return (
      <div className="leaf-container">
      <div className="leaf" style={adjustment}>
      <img src="/img/pink%20tip.png" style={tipWidth} />
      </div>
      </div>
    );
  }
}

export default Leaf;
