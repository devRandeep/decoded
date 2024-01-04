import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import map from "./images/map.png";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Contact() {
  return (
    <>
      <section className="p80">
        <Container>
          <Row>
            <Col md={6}>
              <div className="addressDetail">
                <h3>Locations</h3>
                <div className="locationBox">
                  <h6>LONDON</h6>
                  <p>United Kingdom</p>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                    >
                      <path
                        d="M12 13.5C13.6569 13.5 15 12.1569 15 10.5C15 8.84315 13.6569 7.5 12 7.5C10.3431 7.5 9 8.84315 9 10.5C9 12.1569 10.3431 13.5 12 13.5Z"
                        stroke="#252525"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12 2.5C9.87827 2.5 7.84344 3.34285 6.34315 4.84315C4.84285 6.34344 4 8.37827 4 10.5C4 12.392 4.402 13.63 5.5 15L12 22.5L18.5 15C19.598 13.63 20 12.392 20 10.5C20 8.37827 19.1571 6.34344 17.6569 4.84315C16.1566 3.34285 14.1217 2.5 12 2.5Z"
                        stroke="#252525"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    8 Devonshire Square, London, EC2M 4YJ
                  </li>
                </div>

                <div className="locationBox">
                  <h6>NEW YORK</h6>
                  <p>United Kingdom</p>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                    >
                      <path
                        d="M12 13.5C13.6569 13.5 15 12.1569 15 10.5C15 8.84315 13.6569 7.5 12 7.5C10.3431 7.5 9 8.84315 9 10.5C9 12.1569 10.3431 13.5 12 13.5Z"
                        stroke="#252525"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12 2.5C9.87827 2.5 7.84344 3.34285 6.34315 4.84315C4.84285 6.34344 4 8.37827 4 10.5C4 12.392 4.402 13.63 5.5 15L12 22.5L18.5 15C19.598 13.63 20 12.392 20 10.5C20 8.37827 19.1571 6.34344 17.6569 4.84315C16.1566 3.34285 14.1217 2.5 12 2.5Z"
                        stroke="#252525"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    8 Devonshire Square, London, EC2M 4YJ
                  </li>
                </div>

                <div className="locationBox">
                  <h6>HONG KONG</h6>
                  <p>United Kingdom</p>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                    >
                      <path
                        d="M12 13.5C13.6569 13.5 15 12.1569 15 10.5C15 8.84315 13.6569 7.5 12 7.5C10.3431 7.5 9 8.84315 9 10.5C9 12.1569 10.3431 13.5 12 13.5Z"
                        stroke="#252525"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12 2.5C9.87827 2.5 7.84344 3.34285 6.34315 4.84315C4.84285 6.34344 4 8.37827 4 10.5C4 12.392 4.402 13.63 5.5 15L12 22.5L18.5 15C19.598 13.63 20 12.392 20 10.5C20 8.37827 19.1571 6.34344 17.6569 4.84315C16.1566 3.34285 14.1217 2.5 12 2.5Z"
                        stroke="#252525"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    8 Devonshire Square, London, EC2M 4YJ
                  </li>
                </div>

                <img src={map} alt="" className="mt-5" />
              </div>
            </Col>
            <Col md={6}>
              <div className="contactFormSection">
                <h1>Contact Us</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna{" "}
                </p>
                <form action="" className="contactForm">
                  <TextField label="Name *"></TextField>
                  <TextField label="Company *"></TextField>
                  <TextField label="Job Title *"></TextField>
                  <TextField label="Email Address *"></TextField>
                  <TextField label="Phone *"></TextField>
                  <TextField label="Company *"></TextField>
                  <TextField
                    fullWidth
                    label="Enquiry Details"
                    id="fullWidth"
                    multiline
                    rows={4}
                  />
                  <Link to="/" className="btnSite d-block w-auto mt-4 text-center">
                    Send Message
                  </Link>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
