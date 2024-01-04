import React from "react";
import Pagebreadcrumb from "./Pagebreadcrumb";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import whoWeAreImage from "./images/whoweare.png";
import Newsletter from "./Newsletter";


export default function About() {
  let OurPartnersLogo = [
    {
      src: "./arrayImages/ourpartners1.png",
    },
    {
      src: "./arrayImages/ourpartners2.png",
    },
    {
      src: "./arrayImages/ourpartners3.png",
    },
    {
      src: "./arrayImages/ourpartners4.png",
    },
    {
      src: "./arrayImages/ourpartners5.png",
    },
    {
      src: "./arrayImages/ourpartners6.png",
    },
    {
      src: "./arrayImages/ourpartners7.png",
    },
    {
      src: "./arrayImages/ourpartners8.png",
    },
    {
      src: "./arrayImages/ourpartners9.png",
    },
    {
      src: "./arrayImages/ourpartners10.png",
    },
    {
      src: "./arrayImages/ourpartners11.png",
    },
    {
      src: "./arrayImages/ourpartners12.png",
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
          <Row className="g-4">
            <div className="ourPartnersContent">
              <h3 className="text-center">Our Partners</h3>
            </div>
            {OurPartnersLogo.map((partnerLogo) => (
              <Col md={3}>
                <div className="partnerslogoImageBox">
                  <img src={partnerLogo.src} />
                </div>
              </Col>
            ))} 
          </Row>
        </Container>
      </section>

      <section className="faqFrame p80">
        <Container>
          <Row>
            <h3>Frequently Asked Questions</h3>

            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do?</Accordion.Header>
                <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisi etiam dignissim diam quis enim lobortis scelerisque. Ultrices in iaculis nunc sed augue lacus viverra vitae. Magna etiam tempor orci eu lobortis elementum nibh tellus. Lobortis feugiat vivamus at augue eget
                </Accordion.Body>
              </Accordion.Item>
              
              <Accordion.Item eventKey="1">
                <Accordion.Header>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do?</Accordion.Header>
                <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisi etiam dignissim diam quis enim lobortis scelerisque. Ultrices in iaculis nunc sed augue lacus viverra vitae. Magna etiam tempor orci eu lobortis elementum nibh tellus. Lobortis feugiat vivamus at augue eget
                </Accordion.Body>
              </Accordion.Item>   
            </Accordion>
          </Row>  
        </Container>
      </section>

      <Newsletter />
    </>
  );
}
