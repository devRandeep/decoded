import { Button, Grid } from "@mui/material";
import React from "react";
import logo from "../logo2.png";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Col, Dropdown, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { BrowserRouter, Link, NavLink, Router } from "react-router-dom";
import arrowKey from "./images/keyboard_arrow_down.png";
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';


export default function Header() {
  return (
    <>
      <header>
        <Container>
          <Row className="align-items-center">
            <Col md={2}>
              <div className="logoWrap">              
                  <Link to="/">
                    <img src={logo} alt="" />
                  </Link>            
              </div>
            </Col>
            <Col md={10}>
              <ul className="appMenuList">
                <li>
                  <Link to="/about" exact activeClassName="menuActive">About</Link>
                </li>
                <li>
                  <Link
                    exact
                    activeClassName="menuActive"
                    to="/course"
                    className="dropdownMenu"
                  >
                    Courses <img src={arrowKey} alt="" />
                  </Link>
                  {/* Dropdown */}
                  <div className="submenuToggle">
                    <div className="submenuName">
                      <h3>Courses</h3>
                      <a href="">View all Courses</a>
                    </div>
                    <div className="subMenuMainWrap">
                      {/* Column 1 */}
                      <div className="columnData">
                        <div className="menuTitle yellowLine">
                          <strong>Immersions (Literacy)</strong>
                        </div>
                        <ul>
                          <li>
                            <Link to="/"> Digital Landscape</Link>
                          </li>
                          <li>
                            <Link to="/"> APIs</Link>
                          </li>
                          <li>
                            <Link to="/"> Data Skills In Industry</Link>
                          </li>
                          <li>
                            <Link to="/"> Data & Asking Data Questions</Link>
                          </li>
                          <li>
                            <Link to="/"> Data Storytelling</Link>
                          </li>
                          <li>
                            <Link to="/"> AI & The Future of Intelligence</Link>
                          </li>
                          <li>
                            <Link to="/">AI in Business </Link>
                          </li>
                          <li>
                            <Link to="/">Data Skills In Industry </Link>
                          </li>
                          <li>
                            <Link to="/"> AI Ethics</Link>
                          </li>
                          <li>
                            <Link to="/">AI Tools </Link>
                          </li>
                          <li>
                            <Link to="/"> Stealing Your Credentials</Link>
                          </li>
                          <li>
                            <Link to="/"> Inside the Dark Web</Link>
                          </li>
                          <li>
                            <Link to="/"> Monetising Data Dumps</Link>
                          </li>
                          <li>
                            <Link to="/"> Held to Ransomware</Link>
                          </li>
                          <li>
                            <Link to="/"> Demystifying Synthetic IDs</Link>
                          </li>
                        </ul>
                      </div>
                      {/* Column 1 Closed */}

                      {/* Column 2 */}
                      <div className="columnData">
                        <div className="menuTitle greenLine">
                          <strong>Workshops (Fluency)</strong>
                        </div>
                        <ul>
                          <li>
                            <Link to="/"> Data Mindset</Link>
                          </li>
                          <li>
                            <Link to="/"> Developer Mindset</Link>
                          </li>
                          <li>
                            <Link to="/"> Hacker Mindset</Link>
                          </li>
                          <li>
                            <Link to="/"> Data Decisions</Link>
                          </li>
                          <li>
                            <Link to="/"> Data Storytelling</Link>
                          </li>
                          <li>
                            <Link to="/"> Data Ethics</Link>
                          </li>
                        </ul>
                      </div>
                      {/* Column 2 Closed */}

                      {/* Column 3 */}
                      <div className="columnData">
                        <div className="menuTitle pinkLine">
                          <strong>Academies / Apprenticeships (Mastery)</strong>
                        </div>
                        <ul>
                          <li>
                            <Link to="/">Technical Data Citizen</Link>
                          </li>
                          <li>
                            <Link to="/">Data Analyst (Python)</Link>
                          </li>
                          <li>
                            <Link to="/"> Data Scientist</Link>
                          </li>
                          <li>
                            <Link to="/"> Data Engineer</Link>
                          </li>
                          <li>
                            <Link to="/">Analytics Engineer</Link>
                          </li>
                          <li>
                            <Link to="/"> Product Manager</Link>
                          </li>
                          <li>
                            <Link to="/">Software Engineer</Link>
                          </li>
                          <li>
                            <Link to="/">Data Technician L3</Link>
                          </li>
                          <li>
                            <Link to="/">Data Analyst L4</Link>
                          </li>
                          <li>
                            <Link to="/">Data Engineer L5</Link>
                          </li>
                          <li>
                            <Link to="/">Digital Product Manager L4</Link>
                          </li>
                          <li>
                            <Link to="/">Software Engineer L6</Link>
                          </li>
                        </ul>
                      </div>
                      {/* Column 3 Closed */}
                    </div>
                  </div>
                </li>
                <li>
                  <Link
                    exact
                    activeClassName="menuActive"
                    to="/apprenticeships"
                  >
                    Apprenticeships
                  </Link>
                </li>
                <li>
                  <Link exact activeClassName="menuActive" to="/casestudies">
                    Case studies
                  </Link>
                </li>
                <li>
                  <Link exact activeClassName="menuActive" to="/insights">
                    Insights
                  </Link>
                </li>
                <li>
                  <Link exact activeClassName="menuActive" to="/career">
                    Careers
                  </Link>
                </li>
            
                <li>
                  <Link
                    exact
                    activeClassName="menuActive"
                    className="btnSite"
                    to="/contactus"
                  >
                    Contact 
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </header>
    </>
  );
}
