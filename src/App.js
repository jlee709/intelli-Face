import React, { Component } from "react";

import Nav from "./components/Nav/Nav";
import Logo from "./components/Logo/Logo";
import ImageForm from "./components/ImageForm/ImageForm";
import FacialRec from "./components/FacialRec/FacialRec";
import CrowdRank from "./components/CrowdRank/CrowdRank";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
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
