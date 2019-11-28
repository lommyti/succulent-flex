import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Leaf from "./Leaf";
import RoundLeaf from "./RoundLeaf";
import Cactus from "./Cactus";
import Rock from "./Rock";
import Typing from "react-typing-animation";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leaves: [],
      leaves2: [],
      roundleaves: [],
      rocks: [],
      cactus: [],
      start: "false"
    };
  }

  setSandbox() {
    this.makeLeaves();
    this.makeRoundLeaves();
    this.makeRocks();
    this.makeCactus();
  }

  makeLeaves() {
    var temp = [];
    var temp2 = [];
    this.setState({ leaves: temp });
    this.setState({ leaves2: temp2 });
    for (let i = 0; i < 40; i++) {
      if (i > 15 || i % 2 != 0) {
        temp.push(<Leaf key={i} leafNum={i} />);
      }
    }
    this.setState({ leaves: temp });
    for (let i = 0; i < 50; i++) {
      if (i > 15 || i % 2 != 0) {
        temp2.push(<Leaf key={i} leafNum={i} />);
      }
    }
    this.setState({ leaves2: temp2 });
    this.setState({ start: "true" });
  }

  makeRoundLeaves() {
    var temp = [];
    this.setState({ roundleaves: temp });
    for (let i = 0; i < 35; i++) {
      if (i > 15 || i % 2 != 0) {
        temp.push(<RoundLeaf key={i} leafNum={i} />);
      }
    }
    this.setState({ roundleaves: temp });
  }

  makeCactus() {
    var temp = [];
    this.setState({ cactus: temp });
    for (let i = 0; i < 40; i++) {
      if (i > 15 || i % 2 != 0) {
        temp.push(<Cactus key={i} leafNum={i} />);
      }
    }
    this.setState({ cactus: temp });
  }

  makeRocks() {
    var temp = [];
    this.setState({ rocks: temp });
    for (let i = 0; i < 500; i++) {
      temp.push(<Rock key={i} rockNum={(i % 6) + 7} />);
    }
    this.setState({ rocks: temp });
  }

  renderButton() {
    if (this.state.start == "false") {
      return (
        <Typing loop="true" speed={80}>
          <button onClick={() => this.setSandbox()}>
            {" "}
            YOU COME ACROSS A BARREN AND SANDY PLAIN. CLICK TO GROW THIS GARDEN{" "}
          </button>
          <Typing.Delay ms={10000} />
        </Typing>
      );
    } else {
      return;
    }
  }

  renderFinished() {
    if (this.state.start == "false") {
      return;
    } else {
      return <button> WOULD YOU LOOK AT THAT! IT CAME TO LIFE! </button>;
    }
  }

  renderCactusBase() {
    if (this.state.start == "false") {
      return;
    } else {
      return <div className="cactus-base" />;
    }
  }

  render() {
    return (
      <div className="App">
        <h3>SUCCULENT SANDBOX</h3>
        <div className="sandbox">
          <div className="rocks">{this.state.rocks}</div>
          <div className="leaves">{this.state.leaves}</div>
          <div className="leaves2">{this.state.leaves2}</div>
          <div className="roundleaves">{this.state.roundleaves}</div>
          <div className="cacti">
            {this.renderCactusBase()}
            <div className="cactus-inside-container">{this.state.cactus}</div>
          </div>
        </div>
        {this.renderButton()}
        {this.renderFinished()}
      </div>
    );
  }
}

export default App;
