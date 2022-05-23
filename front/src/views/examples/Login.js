import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import { connect } from "react-redux";
import { loginUserAction } from "../../actions/LoginActions";
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";

class Login extends Component {
  onHandleLogin = (event) => {
    event.preventDefault();

    let Email = event.target.email.value;
    let password = event.target.password.value;

    const data = {
      Email,
      password,
    };

    this.props.dispatch(loginUserAction(data));
  };

  render() {
    let isSuccess, error;
    if (this.props.response) {
      isSuccess = this.props.response.login.accessToken;
      error = this.props.response.login.err;

    }
    return (
      <>
        <Col lg="5" md="7">
          <Card className="bg-secondary shadow border-0">
            <CardBody className="px-lg-5 py-lg-5">
              {!isSuccess ? <div>{error}</div> : <Route path="/index" />}
              {/* <Form role="form" onSubmit={this.onHandleLogin}>
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email"
                    type="email"
                    autoComplete="new-email"
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Password"
                    type="password"
                    autoComplete="new-password"
                  />
                </InputGroup>
              </FormGroup>
              <div className="custom-control custom-control-alternative custom-checkbox">
                <input
                  className="custom-control-input"
                  id=" customCheckLogin"
                  type="checkbox"
                />
                <label
                  className="custom-control-label"
                  htmlFor=" customCheckLogin"
                >
                  <span className="text-muted">Remember me</span>
                </label>
              </div>
              <div className="text-center">
                <Button className="my-4" color="danger" type="button">
                  Sign in
                </Button>
              </div>
            </Form> */}
              <div>
                <h3>Login Page</h3>
                {!isSuccess ? (
                  <div>{error}</div>
                ) : (
                  <Navigate to="dashboard" />
                )}
                <form onSubmit={this.onHandleLogin}>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />
                  </div>
                  <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                  </div>
                  <div>
                    <button>Login</button>
                  </div>
                </form>
              </div>
            </CardBody>
          </Card>
          <Row className="mt-3">
            <Col xs="6">
              <a
                className="text-light"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <small>Forgot password?</small>
              </a>
            </Col>
            <Col className="text-right" xs="6">
              <a
                className="text-light"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              ></a>
            </Col>
          </Row>
        </Col>
      </>
    );
  }
}

const mapStateToProps = (response) => ({ response });

export default connect(mapStateToProps)(Login);
