import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Leaf extends Component {
  render() {
    const adjustment = {
      height: Math.min(Math.pow(this.props.leafNum, 1.2), 35) + "px",
      transform: "rotate(" + ((8*Math.random())+ (this.props.leafNum * 34))  + "deg) translate(0," + Math.pow(this.props.leafNum, 1.2)/2 + "px)",
      zIndex: -this.props.leafNum,
      animationDelay: this.props.leafNum/10 + "s"
    }
    return (
      <div className="leaf" style={adjustment}>
      </div>
    );
  }
}

export default Leaf;
