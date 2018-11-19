import React, { Component } from "react";
import Particles from "react-particles-js";
import Clarifai from "clarifai";
import Nav from "./components/Nav/Nav";
import Logo from "./components/Logo/Logo";
import ImageForm from "./components/ImageForm/ImageForm";
import FacialRec from "./components/FacialRec/FacialRec";
import CrowdRank from "./components/CrowdRank/CrowdRank";
import SignIn from "./components/SignIn/signIn";
import "./App.css";

// initialize Calrify
const app = new Clarifai.App({
  apiKey: "786375fc69b048768d34e310100c7ba4"
});

const particleOptions = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 900
      }
    }
  }
};

class App extends Component {
  constructor() {
    super();

    this.state = {
      input: "",
      imageUrl: "",
      box: {},
      route: "signin",
      isSignedIn: false,
      user: {
        id: "",
        name: "",
        email: "",
        entries: 0,
        joined: ""
      }
    };
  }

  // componentDidMount() {
  //     fetch("http://localhost:3000/")
  //         .then(response => response.json())
  //     // .then(console.log);
  // }

  calculateFaceLocation = data => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputImage");
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height
    };
  };
  loadUser = data => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined
      }
    });
  };
  displayFaceBox = box => {
    this.setState({ box: box });
  };

  onInputChange = event => {
    this.setState({ input: event.target.value });
  };

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });

    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response =>
        this.displayFaceBox(this.calculateFaceLocation(response)).catch(
          error => {
            console.log(error);
          }
        )
      );
  };

  render() {
    const { box } = this.state;
    return (
      <div className="App">
        <Particles className="particles" params={particleOptions} />
        <Nav />
        {this.state.route === "signin" ? (
          <SignIn />
        ) : (
          <div>
            <Logo />
            <CrowdRank />
            <ImageForm
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
            />
            <FacialRec
              className="box mt2"
              box={box}
              imageUrl={this.state.input}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
