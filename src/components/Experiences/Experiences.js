import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ExperienceCard from "./ExperienceCard";
import Particle from "../Particle";

function Experiences() {
  return (
    <Container fluid className="experience-section">
      <Particle />
      <Container>
        <h1 className="experience-heading">
          My <strong className="purple">Experiences</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few positions I've held recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="experience-card">
            <ExperienceCard
              title="Junior IT Analyst Co-op"
              date="Sept 2022 – Dec 2022"
              company="Innovation Science and Economic Development Canada"
              location="Ottawa, ON"
              description={[
                "Designed and enhanced client-focused IT services, successfully reducing client service times by 15% through optimized report generation and metric analysis.",
                "Authored and revised Knowledge Base articles, boosting IT Service Desk efficiency by 20% through improved accessibility and user guidance."
              ]}
            />
          </Col>

          <Col md={4} className="experience-card">
            <ExperienceCard
              title="Analytical Lab Management Co-op"
              date="Jan 2022 – April 2022"
              company="National Research Council Canada (NRC)"
              location="Ottawa, ON"
              description={[
                "Actively contributed to strategic meetings and spearheaded the development of a lab management strategy, improving lab operational efficiency by 25%.",
                "Implemented a Lab Management Platform and conducted training for 10+ users, resulting in a 30% increase in compliance with documented rules and procedures."
              ]}
            />
          </Col>

          <Col md={4} className="experience-card">
            <ExperienceCard
              title="Software Developer Co-op"
              date="July 2021 – Oct 2021"
              company="University of Ottawa"
              location="Ottawa, ON"
              description={[
                "Converted legal contracts into Symboleo specifications and developed LTL/CTL properties, enhancing data protection measures by integrating automated compliance checks.",
                "Supported a team of developers in testing and refining software specifications, which decreased bug rates by 40% prior to deployment."
              ]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experiences;
