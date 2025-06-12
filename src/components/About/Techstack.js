import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
  DiJava,
  
} from "react-icons/di";
import {
  SiHtml5,
  SiCss3,
  SiPostgresql,
  SiFirebase,
  SiBootstrap,
  SiArduino,
  SiRaspberrypi,
  SiAssemblyscript,
  
  
} from "react-icons/si";
import { FaMicrochip } from "react-icons/fa";
import { DiTerminal } from "react-icons/di";
import { ReactComponent as CIcon } from "./CIcon.svg";
import { ReactComponent as VerilogIcon } from "./VerilogIcon.svg";
import { ReactComponent as Systemverilog } from "./Systemverilog.svg";
import { ReactComponent as VHDLIcon } from "./VHDLIcon.svg";
import ReactTooltip from 'react-tooltip';

function Techstack() {
  return (
    <>
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons custom-icon">
        <CIcon data-tip="C" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus data-tip="C++" />
      </Col>
      <Col xs={4} md={2} className="tech-icons custom-icon">
        <VerilogIcon data-tip="Verilog" />
      </Col>
      <Col xs={4} md={2} className="tech-icons custom-icon">
        <Systemverilog data-tip="Systemverilog" />
      </Col>
      <Col xs={4} md={2} className="tech-icons custom-icon">
        <VHDLIcon data-tip="VHDL" />
      </Col>
    
      
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 data-tip="JavaScript" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs data-tip="Node.js" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact data-tip="React" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython data-tip="Python" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava data-tip="Java" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit data-tip="Git" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 data-tip="HTML5" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 data-tip="CSS3" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql data-tip="PostgreSQL" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase data-tip="Firebase" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap data-tip="Bootstrap" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiArduino data-tip="Arduino" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRaspberrypi data-tip="Raspberry Pi" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAssemblyscript data-tip="AssemblyScript" />
      </Col>
    
      
      <Col xs={4} md={2} className="tech-icons">
        <FaMicrochip data-tip="Microchip" />
      </Col>
      
    </Row>
    </>
  );
}

export default Techstack;
