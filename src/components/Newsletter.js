import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function Newsletter() {
  return (
    <>
      <section className="newsLetterFrame p80">
        <Container>
          <Row className="align-items-center">
            <Col md={10}>
              <h2>Lorem ipsum dolor sit amaet</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod <br/>tempor ipsum dolor sit amet ipsum dolor sit amet
              </p>
            </Col>
            <Col md={2} className="text-end">
              <a href="" className="btnSite bgDark">
                Contact Us
              </a>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
