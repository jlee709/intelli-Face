import React, { Component } from "react";
import Particles from "react-particles-js";

import Nav from "./components/Nav/Nav";
import Logo from "./components/Logo/Logo";
import ImageForm from "./components/ImageForm/ImageForm";
import FacialRec from "./components/FacialRec/FacialRec";
import CrowdRank from "./components/CrowdRank/CrowdRank";
import Clarifai from "clarifai";
import "./App.css";

// initialize Calrify
const app = new Clarifai.App({
  apiKey: "786375fc69b048768d34e310100c7ba4"
});

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
  constructor() {
    super();

    this.state = {
      input: "",
      imageUrl: ""
    };
  }

  onInputChange = event => {
    this.setState({ input: event.target.value });
  };

  onButtonSubmit = () => {
    this.setState = { imageUrl: this.state.input };

    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then(
      function(response) {
        // do something with response
        console.log(
          response.outputs[0].data.regions[0].region_info.bounding_box
        );
      },
      function(err) {
        // there was an error
      }
    );
  };

  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particleOptions} />
        <Nav />
        <Logo />
        <CrowdRank />
        <ImageForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <FacialRec imageUrl={this.state.input} />
      </div>
    );
  }
}

export default App;
