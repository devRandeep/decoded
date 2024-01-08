import React from "react";
import { Col, Container, Form, FormLabel, Row } from "react-bootstrap";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {  FormControl,  InputLabel,  MenuItem,  Select,  TextField } from "@mui/material";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Career() {
  return (
    <>
      <section className="careerFrame p80">
        <Container>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <div className="careerSection">
                <h1>Want to know more?</h1>
                <p>
                  Send us a message using the form below and our team of experts
                  will get back to you shortly.
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
         
                    <Form.Select size="lg">                    
                    <option> To help us direct your enquiry, please select your region *</option>
                    <option> To help us direct your enquiry, please select your region *</option>
                    <option> To help us direct your enquiry, please select your region *</option>
                    <option> To help us direct your enquiry, please select your region *</option>
                  </Form.Select>

                  <Form.Select size="lg">                    
                    <option>Which course are you interested in? *</option>
                    <option> Leadership Training</option>
                    <option> Data Academy</option>
                    <option> Apprenticeships Programmes</option>
                    <option> Not Sure</option>
                  </Form.Select>
                  <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Yes, I would like to receive email communications regarding products, services, industry news and best practice. We will never share your data with 3rd parties and you can, of course, unsubscribe at any time." />                  
                    </FormGroup>      
                  <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="I agree to the Privacy Policy that protects my personal information" />                  
                    </FormGroup>   
                  <Link
                    to="/"
                    className="btnSite d-block w-auto mt-4 text-center"
                  >
                    Send Enquiry
                  </Link>   
                    
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}
