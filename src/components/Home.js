import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AboutGirl from "./images/aboutgirl.png";
import Counter from "./Counter";
import MakesDiffrenceImage from "./images/makesdifference.png";
import Testimonial from "./Testimonial";
import Newsletter from "./Newsletter";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import HomeContainer from '../container/HomeContainer';

export default function Home() {
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
      {/* Banne Section */}
      <section className="bannerFrame">
        <Container>
          <Row>
            <Col md={5} className="bannerText text-start">
              <h1>World-leading Digital and Data Educators</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Link to="/course" className="btnSite"> 
                View Courses
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

        <HomeContainer /> 
        

      <section className="homeAbout">
        <Container>
          <Row className="d-flex align-items-center">
            <Col md={5}>
              <img src={AboutGirl} alt="" />
            </Col>
            <Col md={7}>
              <div className="aboutText text-start">
                <h2>Lorem ipsum dolor sit amet, </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit
                </p>

                <a href="" className="btnSite bgDark mt-3 d-inline-block">
                  Find out more
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="digitalProficency p80">
        <Container>
          {/* Section Title */}
          <Row className="sectionTitleRow mb-5 d-flex justify-content-between">
            <Col md={8} className="text-start">
              <h2>Digital Proficency Spectrum</h2>
            </Col>
            <Col md={4} className="text-end">
              <Link to="/course" className="btnSite">
                View All
              </Link>
            </Col>
          </Row>
          {/* Section Title Closed */}
          <Row>
            {spectrumItem.slice(0, 3).map((specItem) => (
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
      <Counter />

      <section className="makeUsDifferent p80">
        <Container>
          <Row>
            <Col md={6}>
              <div className="makeusdifferentTextBox">
                <h2>What makes us different</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                <ul>
                  {/* Item */}
                  <li>
                    <div className="iconBox">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="39"
                        viewBox="0 0 40 39"
                        fill="none"
                      >
                        <path
                          d="M40 15.1055L25.62 13.8655L20 0.625488L14.38 13.8855L0 15.1055L10.92 24.5655L7.64 38.6255L20 31.1655L32.36 38.6255L29.1 24.5655L40 15.1055ZM20 27.4255L12.48 31.9655L14.48 23.4055L7.84 17.6455L16.6 16.8855L20 8.82549L23.42 16.9055L32.18 17.6655L25.54 23.4255L27.54 31.9855L20 27.4255Z"
                          fill="#252525"
                        />
                        <path
                          d="M40 15.1055L25.62 13.8655L20 0.625488L14.38 13.8855L0 15.1055L10.92 24.5655L7.64 38.6255L20 31.1655L32.36 38.6255L29.1 24.5655L40 15.1055ZM20 27.4255L12.48 31.9655L14.48 23.4055L7.84 17.6455L16.6 16.8855L20 8.82549L23.42 16.9055L32.18 17.6655L25.54 23.4255L27.54 31.9855L20 27.4255Z"
                          fill="black"
                          fill-opacity="0.2"
                        />
                        <path
                          d="M40 15.1055L25.62 13.8655L20 0.625488L14.38 13.8855L0 15.1055L10.92 24.5655L7.64 38.6255L20 31.1655L32.36 38.6255L29.1 24.5655L40 15.1055ZM20 27.4255L12.48 31.9655L14.48 23.4055L7.84 17.6455L16.6 16.8855L20 8.82549L23.42 16.9055L32.18 17.6655L25.54 23.4255L27.54 31.9855L20 27.4255Z"
                          fill="black"
                          fill-opacity="0.2"
                        />
                        <path
                          d="M40 15.1055L25.62 13.8655L20 0.625488L14.38 13.8855L0 15.1055L10.92 24.5655L7.64 38.6255L20 31.1655L32.36 38.6255L29.1 24.5655L40 15.1055ZM20 27.4255L12.48 31.9655L14.48 23.4055L7.84 17.6455L16.6 16.8855L20 8.82549L23.42 16.9055L32.18 17.6655L25.54 23.4255L27.54 31.9855L20 27.4255Z"
                          fill="black"
                          fill-opacity="0.2"
                        />
                      </svg>
                    </div>
                    <div className="iconText">
                      <p>
                        <strong>Lorem ipsum dolor sit amet, consectetur</strong>
                      </p>
                      <p>
                        Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea
                      </p>
                    </div>
                  </li>
                  {/* Item Closed */}

                  {/* Item */}
                  <li>
                    <div className="iconBox">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="37"
                        viewBox="0 0 40 37"
                        fill="none"
                      >
                        <path
                          d="M7.27273 15.1709V36.9891H0V15.1709H7.27273ZM14.5455 36.9891C13.581 36.9891 12.6561 36.606 11.9742 35.9241C11.2922 35.2421 10.9091 34.3172 10.9091 33.3528V15.1709C10.9091 14.1709 11.3091 13.2619 11.9818 12.6073L23.9455 0.625488L25.8727 2.55276C26.3636 3.04367 26.6727 3.7164 26.6727 4.46185L26.6182 5.04367L24.8909 13.3528H36.3636C37.3281 13.3528 38.253 13.7359 38.9349 14.4178C39.6169 15.0998 40 16.0247 40 16.9891V20.6255C40 21.0982 39.9091 21.5346 39.7455 21.9528L34.2545 34.7709C33.7091 36.08 32.4182 36.9891 30.9091 36.9891H14.5455ZM14.5455 33.3528H30.9636L36.3636 20.6255V16.9891H20.3818L22.4364 7.3164L14.5455 15.2255V33.3528Z"
                          fill="#252525"
                        />
                        <path
                          d="M7.27273 15.1709V36.9891H0V15.1709H7.27273ZM14.5455 36.9891C13.581 36.9891 12.6561 36.606 11.9742 35.9241C11.2922 35.2421 10.9091 34.3172 10.9091 33.3528V15.1709C10.9091 14.1709 11.3091 13.2619 11.9818 12.6073L23.9455 0.625488L25.8727 2.55276C26.3636 3.04367 26.6727 3.7164 26.6727 4.46185L26.6182 5.04367L24.8909 13.3528H36.3636C37.3281 13.3528 38.253 13.7359 38.9349 14.4178C39.6169 15.0998 40 16.0247 40 16.9891V20.6255C40 21.0982 39.9091 21.5346 39.7455 21.9528L34.2545 34.7709C33.7091 36.08 32.4182 36.9891 30.9091 36.9891H14.5455ZM14.5455 33.3528H30.9636L36.3636 20.6255V16.9891H20.3818L22.4364 7.3164L14.5455 15.2255V33.3528Z"
                          fill="black"
                          fill-opacity="0.2"
                        />
                        <path
                          d="M7.27273 15.1709V36.9891H0V15.1709H7.27273ZM14.5455 36.9891C13.581 36.9891 12.6561 36.606 11.9742 35.9241C11.2922 35.2421 10.9091 34.3172 10.9091 33.3528V15.1709C10.9091 14.1709 11.3091 13.2619 11.9818 12.6073L23.9455 0.625488L25.8727 2.55276C26.3636 3.04367 26.6727 3.7164 26.6727 4.46185L26.6182 5.04367L24.8909 13.3528H36.3636C37.3281 13.3528 38.253 13.7359 38.9349 14.4178C39.6169 15.0998 40 16.0247 40 16.9891V20.6255C40 21.0982 39.9091 21.5346 39.7455 21.9528L34.2545 34.7709C33.7091 36.08 32.4182 36.9891 30.9091 36.9891H14.5455ZM14.5455 33.3528H30.9636L36.3636 20.6255V16.9891H20.3818L22.4364 7.3164L14.5455 15.2255V33.3528Z"
                          fill="black"
                          fill-opacity="0.2"
                        />
                        <path
                          d="M7.27273 15.1709V36.9891H0V15.1709H7.27273ZM14.5455 36.9891C13.581 36.9891 12.6561 36.606 11.9742 35.9241C11.2922 35.2421 10.9091 34.3172 10.9091 33.3528V15.1709C10.9091 14.1709 11.3091 13.2619 11.9818 12.6073L23.9455 0.625488L25.8727 2.55276C26.3636 3.04367 26.6727 3.7164 26.6727 4.46185L26.6182 5.04367L24.8909 13.3528H36.3636C37.3281 13.3528 38.253 13.7359 38.9349 14.4178C39.6169 15.0998 40 16.0247 40 16.9891V20.6255C40 21.0982 39.9091 21.5346 39.7455 21.9528L34.2545 34.7709C33.7091 36.08 32.4182 36.9891 30.9091 36.9891H14.5455ZM14.5455 33.3528H30.9636L36.3636 20.6255V16.9891H20.3818L22.4364 7.3164L14.5455 15.2255V33.3528Z"
                          fill="black"
                          fill-opacity="0.2"
                        />
                      </svg>
                    </div>
                    <div className="iconText">
                      <p>
                        <strong>Lorem ipsum dolor sit amet, consectetur</strong>
                      </p>
                      <p>
                        Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea
                      </p>
                    </div>
                  </li>
                  {/* Item Closed */}

                  {/* Item */}
                  <li>
                    <div className="iconBox">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="41"
                        viewBox="0 0 40 41"
                        fill="none"
                      >
                        <path
                          d="M17.7218 0.625488C27.5042 0.625488 35.4435 8.56484 35.4435 18.3473C35.4435 28.1297 27.5042 36.069 17.7218 36.069C7.93935 36.069 0 28.1297 0 18.3473C0 8.56484 7.93935 0.625488 17.7218 0.625488ZM17.7218 32.1309C25.3362 32.1309 31.5054 25.9617 31.5054 18.3473C31.5054 10.7308 25.3362 4.56366 17.7218 4.56366C10.1053 4.56366 3.93817 10.7308 3.93817 18.3473C3.93817 25.9617 10.1053 32.1309 17.7218 32.1309ZM34.4295 32.2707L40 37.8392L37.2137 40.6255L31.6452 35.0549L34.4295 32.2707Z"
                          fill="#252525"
                        />
                        <path
                          d="M17.7218 0.625488C27.5042 0.625488 35.4435 8.56484 35.4435 18.3473C35.4435 28.1297 27.5042 36.069 17.7218 36.069C7.93935 36.069 0 28.1297 0 18.3473C0 8.56484 7.93935 0.625488 17.7218 0.625488ZM17.7218 32.1309C25.3362 32.1309 31.5054 25.9617 31.5054 18.3473C31.5054 10.7308 25.3362 4.56366 17.7218 4.56366C10.1053 4.56366 3.93817 10.7308 3.93817 18.3473C3.93817 25.9617 10.1053 32.1309 17.7218 32.1309ZM34.4295 32.2707L40 37.8392L37.2137 40.6255L31.6452 35.0549L34.4295 32.2707Z"
                          fill="black"
                          fill-opacity="0.2"
                        />
                        <path
                          d="M17.7218 0.625488C27.5042 0.625488 35.4435 8.56484 35.4435 18.3473C35.4435 28.1297 27.5042 36.069 17.7218 36.069C7.93935 36.069 0 28.1297 0 18.3473C0 8.56484 7.93935 0.625488 17.7218 0.625488ZM17.7218 32.1309C25.3362 32.1309 31.5054 25.9617 31.5054 18.3473C31.5054 10.7308 25.3362 4.56366 17.7218 4.56366C10.1053 4.56366 3.93817 10.7308 3.93817 18.3473C3.93817 25.9617 10.1053 32.1309 17.7218 32.1309ZM34.4295 32.2707L40 37.8392L37.2137 40.6255L31.6452 35.0549L34.4295 32.2707Z"
                          fill="black"
                          fill-opacity="0.2"
                        />
                        <path
                          d="M17.7218 0.625488C27.5042 0.625488 35.4435 8.56484 35.4435 18.3473C35.4435 28.1297 27.5042 36.069 17.7218 36.069C7.93935 36.069 0 28.1297 0 18.3473C0 8.56484 7.93935 0.625488 17.7218 0.625488ZM17.7218 32.1309C25.3362 32.1309 31.5054 25.9617 31.5054 18.3473C31.5054 10.7308 25.3362 4.56366 17.7218 4.56366C10.1053 4.56366 3.93817 10.7308 3.93817 18.3473C3.93817 25.9617 10.1053 32.1309 17.7218 32.1309ZM34.4295 32.2707L40 37.8392L37.2137 40.6255L31.6452 35.0549L34.4295 32.2707Z"
                          fill="black"
                          fill-opacity="0.2"
                        />
                      </svg>
                    </div>
                    <div className="iconText">
                      <p>
                        <strong>Lorem ipsum dolor sit amet, consectetur</strong>
                      </p>
                      <p>
                        Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea
                      </p>
                    </div>
                  </li>
                  {/* Item Closed */}
                  {/* Item */}
                  <li>
                    <div className="iconBox">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="47"
                        viewBox="0 0 40 47"
                        fill="none"
                      >
                        <path
                          d="M17.5 46.7505C12.4583 46.1255 8.28167 43.9272 4.97 40.1555C1.65667 36.3855 0 31.9588 0 26.8755C0 24.1255 0.541667 21.4897 1.625 18.968C2.70833 16.448 4.25 14.2505 6.25 12.3755L9.8125 15.938C8.22917 17.3547 7.03167 19.0005 6.22 20.8755C5.40667 22.7505 5 24.7505 5 26.8755C5 30.5422 6.16667 33.7813 8.5 36.593C10.8333 39.4063 13.8333 41.1255 17.5 41.7505V46.7505ZM22.5 46.7505V41.7505C26.125 41.0838 29.1142 39.3547 31.4675 36.563C33.8225 33.7713 35 30.5422 35 26.8755C35 22.7088 33.5417 19.1672 30.625 16.2505C27.7083 13.3338 24.1667 11.8755 20 11.8755H19.8125L22.5625 14.6255L19.0625 18.1255L10.3125 9.37549L19.0625 0.625488L22.5625 4.12549L19.8125 6.87549H20C25.5833 6.87549 30.3125 8.81299 34.1875 12.688C38.0625 16.563 40 21.2922 40 26.8755C40 31.9172 38.3442 36.3238 35.0325 40.0955C31.7192 43.8655 27.5417 46.0838 22.5 46.7505Z"
                          fill="#252525"
                        />
                        <path
                          d="M17.5 46.7505C12.4583 46.1255 8.28167 43.9272 4.97 40.1555C1.65667 36.3855 0 31.9588 0 26.8755C0 24.1255 0.541667 21.4897 1.625 18.968C2.70833 16.448 4.25 14.2505 6.25 12.3755L9.8125 15.938C8.22917 17.3547 7.03167 19.0005 6.22 20.8755C5.40667 22.7505 5 24.7505 5 26.8755C5 30.5422 6.16667 33.7813 8.5 36.593C10.8333 39.4063 13.8333 41.1255 17.5 41.7505V46.7505ZM22.5 46.7505V41.7505C26.125 41.0838 29.1142 39.3547 31.4675 36.563C33.8225 33.7713 35 30.5422 35 26.8755C35 22.7088 33.5417 19.1672 30.625 16.2505C27.7083 13.3338 24.1667 11.8755 20 11.8755H19.8125L22.5625 14.6255L19.0625 18.1255L10.3125 9.37549L19.0625 0.625488L22.5625 4.12549L19.8125 6.87549H20C25.5833 6.87549 30.3125 8.81299 34.1875 12.688C38.0625 16.563 40 21.2922 40 26.8755C40 31.9172 38.3442 36.3238 35.0325 40.0955C31.7192 43.8655 27.5417 46.0838 22.5 46.7505Z"
                          fill="black"
                          fill-opacity="0.2"
                        />
                        <path
                          d="M17.5 46.7505C12.4583 46.1255 8.28167 43.9272 4.97 40.1555C1.65667 36.3855 0 31.9588 0 26.8755C0 24.1255 0.541667 21.4897 1.625 18.968C2.70833 16.448 4.25 14.2505 6.25 12.3755L9.8125 15.938C8.22917 17.3547 7.03167 19.0005 6.22 20.8755C5.40667 22.7505 5 24.7505 5 26.8755C5 30.5422 6.16667 33.7813 8.5 36.593C10.8333 39.4063 13.8333 41.1255 17.5 41.7505V46.7505ZM22.5 46.7505V41.7505C26.125 41.0838 29.1142 39.3547 31.4675 36.563C33.8225 33.7713 35 30.5422 35 26.8755C35 22.7088 33.5417 19.1672 30.625 16.2505C27.7083 13.3338 24.1667 11.8755 20 11.8755H19.8125L22.5625 14.6255L19.0625 18.1255L10.3125 9.37549L19.0625 0.625488L22.5625 4.12549L19.8125 6.87549H20C25.5833 6.87549 30.3125 8.81299 34.1875 12.688C38.0625 16.563 40 21.2922 40 26.8755C40 31.9172 38.3442 36.3238 35.0325 40.0955C31.7192 43.8655 27.5417 46.0838 22.5 46.7505Z"
                          fill="black"
                          fill-opacity="0.2"
                        />
                        <path
                          d="M17.5 46.7505C12.4583 46.1255 8.28167 43.9272 4.97 40.1555C1.65667 36.3855 0 31.9588 0 26.8755C0 24.1255 0.541667 21.4897 1.625 18.968C2.70833 16.448 4.25 14.2505 6.25 12.3755L9.8125 15.938C8.22917 17.3547 7.03167 19.0005 6.22 20.8755C5.40667 22.7505 5 24.7505 5 26.8755C5 30.5422 6.16667 33.7813 8.5 36.593C10.8333 39.4063 13.8333 41.1255 17.5 41.7505V46.7505ZM22.5 46.7505V41.7505C26.125 41.0838 29.1142 39.3547 31.4675 36.563C33.8225 33.7713 35 30.5422 35 26.8755C35 22.7088 33.5417 19.1672 30.625 16.2505C27.7083 13.3338 24.1667 11.8755 20 11.8755H19.8125L22.5625 14.6255L19.0625 18.1255L10.3125 9.37549L19.0625 0.625488L22.5625 4.12549L19.8125 6.87549H20C25.5833 6.87549 30.3125 8.81299 34.1875 12.688C38.0625 16.563 40 21.2922 40 26.8755C40 31.9172 38.3442 36.3238 35.0325 40.0955C31.7192 43.8655 27.5417 46.0838 22.5 46.7505Z"
                          fill="black"
                          fill-opacity="0.2"
                        />
                      </svg>
                    </div>
                    <div className="iconText">
                      <p>
                        <strong>Lorem ipsum dolor sit amet, consectetur</strong>
                      </p>
                      <p>
                        Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea
                      </p>
                    </div>
                  </li>
                  {/* Item Closed */}
                </ul>
              </div>
            </Col>
            <Col md={6}>
              <div className="makeusdifferentImageBox">
                <img src={MakesDiffrenceImage} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Testimonial />

      <Newsletter />
    </>
  );
}
