import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  
  SiSlack,
  SiTrello,
  SiBitbucket,
  SiAndroidstudio,
  SiMacos,
  SiLinux,
} from "react-icons/si";
import { FaMicrochip, FaWaveSquare } from "react-icons/fa";
import ReactTooltip from "react-tooltip";

function Toolstack() {
  return (
    <>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <SiVisualstudiocode data-tip="Visual Studio Code" />
        </Col>
      
        <Col xs={4} md={2} className="tech-icons">
          <SiSlack data-tip="Slack" />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiTrello data-tip="Trello" />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiBitbucket data-tip="Bitbucket" />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiAndroidstudio data-tip="Android Studio" />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiMacos data-tip="macOS" />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiLinux data-tip="Linux" />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <FaWaveSquare data-tip="Wave Square" />
        </Col>
      </Row>
      <ReactTooltip />
    </>
  );
}

export default Toolstack;
