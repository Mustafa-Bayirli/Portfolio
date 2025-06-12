import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mustafa Bayirli </span>
            from <span className="purple"> Ottawa-Ontario, Canada.</span>
            <br />
            I am a Computer Engineering graduate with extensive co-op experience in software development, IT service management, and electronic hardware design.
            <br />
            I hold a Bachelor of Applied Science in Computer Engineering from the University of Ottawa.
            <br />
            <br />
            Beyond my professional interests in coding and hardware, I am passionate about:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring emerging technology trends
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Mustafa</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
