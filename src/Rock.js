import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Rock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rockColors:['#E4DED8', '#8e8a8b', '#d5a672', '#929697', '#9d7969', '#986a6d']
    }
  }
  render() {
    const adjustment = {
      paddingTop: (Math.max(this.props.rockNum, 15)/2) + "px",
      width: (this.props.rockNum + 5) + "px",
      transform: "rotate(-" + ((8*Math.random())+ (this.props.rockNum * 55))  + "deg) translate(0," + Math.pow(this.props.rockNum, 1.2)/2 + "px)",
      zIndex: -this.props.rockNum,
      background: this.state.rockColors[parseInt(7*Math.random())],
      marginLeft: (500*Math.random()) + "px",
      marginTop: (340*Math.random()) + "px",
      borderRadius: ((5*Math.random()) + 2) + "px " + (5*Math.random()) + "px " + ((5*Math.random()) + 2) + "px " + (5*Math.random()) + "px",
    }
    return (
      <div className="rock" style={adjustment}>
      </div>
    );
  }
}

export default Rock;
