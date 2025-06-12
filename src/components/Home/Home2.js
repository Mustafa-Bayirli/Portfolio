import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I fell in love with <b className="purple"> programming </b> and <b className="purple"> technology </b>, 
            gained expertise in both <b className="purple"> software </b> and <b className="purple"> hardware </b>. I have at least learnt
            something, I think… 🤷‍♂️
              <br />
              <br /> I have a deep passion for programming and technology, with expertise in both software development and hardware design. 
                     Over the years, I have honed my skills in a variety of programming languages, including
              <i>
                <b className="purple"> Java, Python, C/C++ </b> and <b className="purple"> JavaScript. </b>, as well as hardware description languages like {" "}
                <b className="purple">
                 VHDL, Verilog 
                </b> and <b className="purple">
                 SystemVerilog
                </b>
              </i>
              <br />
              <br />
              I am particularly interested in working with
              <i>
                <b className="purple"> emerging technologies </b> and  <b className="purple"> innovative products </b>, with a focus on creating solutions that seamlessly integrate {" "}
                <b className="purple">
                software
                </b>
              </i> &nbsp; and &nbsp;
              <b className="purple">
              hardware
                </b>
              <br />
              <br />
              
              Whenever possible, I also apply my passion and expertise with <b className="purple">FPGA, microcontrollers, </b> 
              and <b className="purple">hardware design </b> 
              to bridge the gap between <b className="purple">software</b> and
              <i>
                <b className="purple">
                  {" "}
                  hardware
                </b>
              </i>
              &nbsp; creating
              <i>
                <b className="purple"> comprehensive and efficient solutions</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/MustafaBayirli"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/Mustafa_bayirli"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mustafa-bayirli-b5b407137/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/mustafa.b92/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
