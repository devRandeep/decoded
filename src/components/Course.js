import React from 'react'
import Pagebreadcrumb from './Pagebreadcrumb'
import { Col, Row, Container } from 'react-bootstrap'

export default function Course() {

  
  const spectrumItem = [
    {
      src: "./arrayImages/spectrum1.png",
      boxText: "Immersions (Literacy)",
      lineColor: "#FEF800",
      boxDes: "Lorem ipsum dolor sit amet, consectur adipiscing elit, sed do",
      courseBenefitOne: "3.5 hour workshop",
      courseBenefitTwo: "In person or online",
      courseBenefitThree: "10-30 learners",
    },

    {
      src: "./arrayImages/spectrum1.png",
      boxText: "Workshops (Fluency)",
      lineColor: "#2ECC71",
      boxDes: "Lorem ipsum dolor sit amet, consectur adipiscing elit, sed do",
      courseBenefitOne: "3.5 hour workshop",
      courseBenefitTwo: "In person or online",
      courseBenefitThree: "10-30 learners",
    },

    {
      src: "./arrayImages/spectrum1.png",
      boxText: "Academies / Apprenticeships (Mastery)",
      lineColor: "#2ECC71",
      boxDes: "Lorem ipsum dolor sit amet, consectur adipiscing elit, sed do",
      courseBenefitOne: "3.5 hour workshop",
      courseBenefitTwo: "In person or online",
      courseBenefitThree: "10-30 learners",
    },
    {
      src: "./arrayImages/spectrum1.png",
      boxText: "Academies / Apprenticeships (Mastery)",
      lineColor: "#2ECC71",
      boxDes: "Lorem ipsum dolor sit amet, consectur adipiscing elit, sed do",
      courseBenefitOne: "3.5 hour workshop",
      courseBenefitTwo: "In person or online",
      courseBenefitThree: "10-30 learners",
    },
  ];
  return (    
    <>
    <Pagebreadcrumb />

      <section className="courseCategories">
          <Container>
            <Row>
              <Col md={4}><p>Immersions (Literacy)</p></Col>
              <Col md={4}><p>Workshops (Fluency)</p></Col>
              <Col md={4}><p>Academies / Apprenticeships (Mastery)</p></Col>  
            </Row>
          </Container>
      </section>


      <section className="digitalProficency p80">
        <Container>
          <Row className='g-5'>
          {spectrumItem.map((specItem) => (
              <Col md={4}>
                <div className="digitalProficencyBox">
                  <div className="spectrumImage">
                    <img src={specItem.src} />
                    <div
                      className="colorLine"
                      style={{ backgroundColor: "#FEF800" }}
                    ></div>
                  </div>
                  <div className="spectrumText">
                    <strong>{specItem.boxText}</strong>
                    <p>{specItem.boxDes}</p>
                    <ul>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M20.9851 7.37787L10.3801 17.9849L4.01611 11.6209L5.43011 10.2069L10.3801 15.1569L19.5721 5.96387L20.9851 7.37787Z"
                            fill="black"
                          />
                        </svg>
                        {specItem.courseBenefitOne}
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M20.9851 7.37787L10.3801 17.9849L4.01611 11.6209L5.43011 10.2069L10.3801 15.1569L19.5721 5.96387L20.9851 7.37787Z"
                            fill="black"
                          />
                        </svg>
                        {specItem.courseBenefitTwo}
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M20.9851 7.37787L10.3801 17.9849L4.01611 11.6209L5.43011 10.2069L10.3801 15.1569L19.5721 5.96387L20.9851 7.37787Z"
                            fill="black"
                          />
                        </svg>
                        {specItem.courseBenefitThree}
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
        </section>


      </>
    
  )
}
