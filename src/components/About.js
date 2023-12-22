import React from "react";
import Pagebreadcrumb from "./Pagebreadcrumb";
import { Col, Container, Row } from "react-bootstrap";
import whoWeAreImage from "../images/whoweare.png";

export default function About() {
  const OurPartnersLogo = [
    {
      imageURL: "./images/ourpartners1.png",
    },
  ];
  return (
    <>
      {/* Breadcrumb */}
      <Pagebreadcrumb />
      {/* Breadcrumb Closed */}

      <section className="aboutSection p80">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="whoweAreImage">
              <img src={whoWeAreImage} alt="" />
            </Col>
            <Col md={6}>
              <div className="aboutContent">
                <h3>Who We Are</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="ourPartners p80">
        <Container>
          <Row>
            <div className="ourPartnersContent">
              <h3 className="text-center">Our Partners</h3>
            </div>
            {OurPartnersLogo.map((partnerLogo) => (
              <Col md={3}>
                <img src={partnerLogo.imageURL} alt="" />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}
