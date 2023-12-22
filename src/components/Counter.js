import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function Counter() {
  const contNumber = [
    {
      value: "25000+",
      counterDesc: "learners taught world wide",
    },
    {
      value: "43",
      counterDesc: "countries delivered across",
    },
    {
      value: "90%",
      counterDesc:
        "of our customer base is made up of fortune 500 or fste 100 clients",
    },
  ];
  return (
    <>
      <section className="counterIncrement">
        <Container>
          <Row className="align-items-center">
            {contNumber.map((countItem) => (
              <Col md={4}>
                <div className="counterBox">
                  <h2>{countItem.value}</h2>
                  <p>{countItem.counterDesc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}
