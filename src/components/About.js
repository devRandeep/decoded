import React from "react";
import Pagebreadcrumb from "./Pagebreadcrumb";
import { Col, Container, Row } from "react-bootstrap";
import whoWeAreImage from "../images/whoweare.png";

export default function About() {
  const OurPartnersLogo = [
    {
      imageURL: "../assets/images/ourpartners1.png",
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
                  {/* Your content */}
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
            {OurPartnersLogo.map((partnerLogo, index) => (
              <Col md={3} key={index}>
                <img src={partnerLogo.imageURL} alt="" />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}
