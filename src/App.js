import React, { Component } from "react";
import Particles from "react-particles-js";

import Nav from "./components/Nav/Nav";
import Logo from "./components/Logo/Logo";
import ImageForm from "./components/ImageForm/ImageForm";
import FacialRec from "./components/FacialRec/FacialRec";
import CrowdRank from "./components/CrowdRank/CrowdRank";
import "./App.css";

const particleOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particleOptions} />
        <Nav />
        <Logo />
        <CrowdRank />
        <ImageForm />
        <FacialRec />
      </div>
    );
  }
}

export default App;
