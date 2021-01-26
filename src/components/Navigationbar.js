import React, { useState } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { Modal } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import RegisterModal from "./RegisterModal";
import { Login, ForgotPassword } from "../pages/Login";

const Navigationbar = () => {
  const Style = {
    textAlign: "center",
    cursor: "pointer",
    fontWeight: "900",
    color: "blue",
  };
  const [firstOpen, setFirstOpen] = useState(false);
  const [secondOpen, setSecondOpen] = useState(false);
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Navbar.Brand
          as={Link}
          to="/"
          className="text-warning"
          style={{ fontWeight: "900" }}
        >
          Cryptocurrency
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <RegisterModal />
            <Nav.Link as={Link} to="/trading-market">
              Trading Market
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>
              <Button
                variant="outline-warning"
                onClick={() => setFirstOpen(true)}
              >
                Login
              </Button>
              <Modal
                onClose={() => setFirstOpen(false)}
                onOpen={() => setFirstOpen(true)}
                open={firstOpen}
                size="tiny"
                centered
                style={{ height: "fit-content" }}
              >
                <Modal.Content>
                  <Login modaal={() => setFirstOpen(false)} />
                </Modal.Content>

                <Modal.Actions>
                  <p style={Style} onClick={() => setSecondOpen(true)}>
                    Forgot Password?
                  </p>
                </Modal.Actions>
                <Modal
                  onClose={() => setSecondOpen(false)}
                  open={secondOpen}
                  size="mini"
                  style={{ height: "fit-content" }}
                  centered
                >
                  <Modal.Content>
                    <ForgotPassword />
                  </Modal.Content>
                  <Modal.Actions>
                    <Button
                      icon="check"
                      content="All Done"
                      onClick={() => setSecondOpen(false)}
                    />
                  </Modal.Actions>
                </Modal>
              </Modal>
            </Nav.Link>
            <Nav.Link as={Link} to="/register">
              <Button variant="warning" active>
                Register Now
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
export default Navigationbar;
