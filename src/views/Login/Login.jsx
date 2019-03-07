import * as React from "react";
import { connect } from "react-redux";

import Auth from "../../service";
import LoginView from "./LoginView";
import { error } from "../../utils";
import { buttonText } from "../../constants";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      loginButtonText: buttonText.LOGIN,
      submitted: false
    };
  }

  componentDidMount() {
    const checkIsAuthenticated = Auth.isAuthenticated();
    if (checkIsAuthenticated) {
      window.location.href = "/dashboard";
    }
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleLogin = e => {
    e.preventDefault();
    this.setState({
      submitted: true
    });
    let { username, password } = this.state;
    username = username.trim();
    password = password.trim();
    if (username && password) {
      this.setState({
        loginButtonText: buttonText.PROCESS_LOGIN
      });
      this.props
        .sendLoginRequest(username, password)
        .then(() => {
          window.location.replace("/dashboard");
        })
        .catch(() => {
          error("Invalid username or password");
          this.setState({
            loginButtonText: buttonText.LOGIN
          });
        });
    }
  };

  render() {
    const { username, password, loginButtonText, submitted } = this.state;
    const isDisabled = loginButtonText === buttonText.PROCESS_LOGIN;
    return (
      <LoginView
        isDisabled={isDisabled}
        username={username}
        password={password}
        submitted={submitted}
        loginButtonText={loginButtonText}
        handleChange={this.handleChange}
        handleLogin={this.handleLogin}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  sendLoginRequest: (username, password) =>
    dispatch(Auth.sendLoginRequest(username, password))
});

export default connect(
  null,
  mapDispatchToProps
)(Login);
