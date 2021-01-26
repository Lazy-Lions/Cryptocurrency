import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Nav, Row, Button, Accordion, Card } from "react-bootstrap";
import Responsive from "react-responsive";
export default class Footer extends Component {
  render() {
    const Desktop = (props) => <Responsive {...props} minWidth={992} />;
    const Mobile = (props) => <Responsive {...props} maxWidth={991} />;
    const About = () => {
      return (
        <div>
          <Nav.Link style={Style.navColor} as={Link} to="/about">
            About{" "}
          </Nav.Link>
          <Nav.Link style={Style.navColor} as={Link} to="/affiliates">
            Affiliate
          </Nav.Link>
          <Nav.Link style={Style.navColor} as={Link} to="/terms">
            Terms
          </Nav.Link>
          <Nav.Link style={Style.navColor} as={Link} to="/announcement">
            Announcements
          </Nav.Link>
          <Nav.Link style={Style.navColor} as={Link} to="/privacy">
            Privacy
          </Nav.Link>
        </div>
      );
    };
    const Product = () => {
      return (
        <div>
          <Nav.Link style={Style.navColor} as={Link} to="/exchange">
            Exchange
          </Nav.Link>
          <Nav.Link style={Style.navColor} as={Link} to="/access">
            Access
          </Nav.Link>
          <Nav.Link style={Style.navColor} as={Link} to="/trust-wallet">
            Trust Wallet
          </Nav.Link>
        </div>
      );
    };
    const Support = () => {
      return (
        <div>
          <Nav.Link style={Style.navColor} as={Link} to="/feedback">
            Give Us Feedback
          </Nav.Link>
          <Nav.Link style={Style.navColor} as={Link} to="/support">
            Support Center
          </Nav.Link>
        </div>
      );
    };
    const Learn = () => {
      return (
        <div>
          <Nav.Link style={Style.navColor} as={Link} to="/crypto-basic">
            What is Crypto?
          </Nav.Link>
          <Nav.Link style={Style.navColor} as={Link} to="/bitcoin-basic">
            What is Bitcoin
          </Nav.Link>
          <Nav.Link style={Style.navColor} as={Link} to="/blockchain-basic">
            What is Blockchain
          </Nav.Link>
        </div>
      );
    };
    const Community = () => {
      return (
        <div>
          <Nav.Link style={Style.navColor} href="https://www.facebook.com">
            Facebook
          </Nav.Link>
          <Nav.Link style={Style.navColor} href="https://www.instagram.com">
            Instagram
          </Nav.Link>
          <Nav.Link style={Style.navColor} href="https://www.twitter.com">
            Twitter
          </Nav.Link>
          <Nav.Link style={Style.navColor} href="https://www.telegram.com">
            Telegram
          </Nav.Link>
        </div>
      );
    };
    const AccordionCard = (props) => {
      return (
        <Card style={Style.card}>
          <Card.Header>
            <Accordion.Toggle
              as={Button}
              style={Style.button}
              variant="outline-warning"
              eventKey={props.ekey}
            >
              <h5>{props.title}</h5>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey={props.ekey}>
            <Card.Body>{props.content}</Card.Body>
          </Accordion.Collapse>
        </Card>
      );
    };
    const Style = {
      footer: {
        backgroundColor: "#007BFF",
        color: "whitesmoke",
        paddingBlock: "4rem",
        paddingInline: "1rem",
      },
      card: {
        borderRadius: ".5rem",
        backgroundColor: "transparent",
      },
      h4: {
        paddingLeft: "1rem",
      },
      navColor: {
        color: "whitesmoke",
      },
      button: {
        width: "8rem",
        height: "3rem",
      },
    };
    return (
      <div style={Style.footer}>
        <Mobile>
          <Col className="text-center">
            <Accordion>
              <AccordionCard ekey="0" title="About Us" content={<About />} />
              <AccordionCard ekey="1" title="Products" content={<Product />} />
              <AccordionCard ekey="2" title="Supports" content={<Support />} />
              <AccordionCard ekey="3" title="Learn" content={<Learn />} />
              <AccordionCard
                ekey="4"
                title="Community"
                content={<Community />}
              />
            </Accordion>
          </Col>
        </Mobile>
        <Desktop>
          <Row>
            <Col>
              <h4 style={Style.h4}>About Us</h4>
              <About />
            </Col>
            <Col>
              <h4 style={Style.h4}>Products</h4>
              <Product />
            </Col>
            <Col>
              <h4 style={Style.h4}>Supports</h4>
              <Support />
            </Col>
            <Col>
              <h4 style={Style.h4}>Learn</h4>
              <Learn />
            </Col>
            <Col>
              <h4 style={Style.h4}>Community</h4>
              <Community />
            </Col>
          </Row>
        </Desktop>
      </div>
    );
  }
}
