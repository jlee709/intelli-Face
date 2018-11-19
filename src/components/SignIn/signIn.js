import React, { Component } from "react";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signInEmail: "",
      password: ""
    };
  }

  onEmailChange = event => {
    this.setState({ signInEmail: event.target.value });
  };

  onPasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  onSubmitSignin = () => {
    console.log(this.state);
  };

  onSubmitSignIn = () => {
    fetch("http://localhost:3000/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange("home");
        }
      });
  };

  render() {
    const { onRouteChange } = this.props;
    console.log(this.props, "PROPS_PROS");
    return (
      <article className="br4 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 center shadow-2">
        <main className="pa4 black-80">
          <form className="measure ">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Sign In</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" for="email-address">
                  Email
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" for="password">
                  Password
                </label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                />
              </div>
              <label className="pa0 ma0 lh-copy f6 pointer" />
            </fieldset>
            <div className="">
              <input
                onClick={() => onRouteChange("home")}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Sign in"
              />
            </div>
            <div className="lh-copy mt3">
              <p onClick={() => onRouteChange("register")}>
                <a href="#" className="f6 link dim black db">
                  Register
                </a>
              </p>
            </div>
          </form>
        </main>
      </article>
    );
  }
}
// Test for git hub

export default SignIn;
