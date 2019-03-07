import React from "react";
import {
  Card,
  CardBody,
  Row,
  Col,
  Button,
  Label,
  Input,
  FormGroup
} from "reactstrap";

import CardAuthor from "components/CardElements/CardAuthor.jsx";
import damirBosnjak from "assets/img/damir-bosnjak.jpg";
import mike from "assets/img/logo-small.png";
import loginBackground from "assets/img/login_background.jpg";

const LoginView = props => {
  return (
    <div className={"login-bg"}>
      <img src={loginBackground} className={"login-bg-image"} alt=".." />

      <div className={"login-box"}>
        <Row className="login-page justify-content-center">
          <Col md={3} xs={12}>
            <Card className="card-user">
              <div className="image">
                <img src={damirBosnjak} alt="..." />
              </div>
              <CardAuthor avatar={mike} avatarAlt="..." />
              <CardBody>
                <form>
                  <div className="row">
                    <div className={"col-md-10"}>
                      <FormGroup>
                        <Label>{"Username"}</Label>
                        <Input
                          name="username"
                          type="text"
                          onChange={e => props.handleChange(e)}
                        />
                        {props.submitted && !props.username && (
                          <div className="error">Username is required</div>
                        )}
                      </FormGroup>
                    </div>
                  </div>
                  <div className="row">
                    <div className={"col-md-10"}>
                      <FormGroup>
                        <Label>{"Password"}</Label>
                        <Input
                          name="password"
                          type="password"
                          onChange={e => props.handleChange(e)}
                        />
                        {props.submitted && !props.password && (
                          <div className="error">Password is required</div>
                        )}
                      </FormGroup>
                    </div>
                  </div>

                  <Row>
                    <div className="update ml-auto mr-auto">
                      <Button
                        color="primary"
                        onClick={e => props.handleLogin(e)}
                        disabled={props.isDisabled}
                      >
                        {props.loginButtonText}
                      </Button>
                    </div>
                  </Row>
                </form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default LoginView;
