import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Leaf from './Leaf.js'

class App extends Component {
  render() {
    let leaves = []
    for(let i = 0; i < 40; i++) {
      if(i < 15 && i % 2 == 0){
      }
      else{
      leaves.push(<Leaf key={i} leafNum={i} />)
    }
    }
    return (
      <div className="App">
        {leaves}
      </div>
    );
  }
}

export default App;
