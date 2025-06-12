import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import RoboticArm from "../../Assets/Projects/RoboticArm.png";
import eHotels from "../../Assets/Projects/eHotels.png";
import UART from "../../Assets/Projects/UART.png";
import USAR from "../../Assets/Projects/USAR.png";
import IDP from "../../Assets/Projects/IDP.png";
import BankSystem from "../../Assets/Projects/bank.jpg";
import GeeGees from "../../Assets/Projects/GeeGee.png";
import SuccessAcademy from "../../Assets/Projects/SuccessAcademy.png";
import ServiceNovigrad from "../../Assets/Projects/ServiceNovigrad.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={USAR}
              isBlog={false}
              title="Emergency Urban Search and Rescue Robot"
              description="The Emergency Urban Search and Rescue (USAR) Robot is designed to aid in rescue operations in urban environments impacted by 
                          disasters. Utilizing a Raspberry Pi 4, various sensors, and a web-based interface, the robot can navigate autonomously or via 
                          remote control, providing real-time video and audio communication. Equipped with environmental sensors and advanced mapping 
                          capabilities, it collects critical data while ensuring the safety of both rescuers and survivors. The robot's compact design allows it
                          to access confined spaces, making it an invaluable tool for emergency response teams."
    
              techStack="Python, HTML, CSS, JavaScript, React, NodeJS, ROS2, OpenCV, Bootstrap, AWS, Raspberry Pi 4, 
                          HC-SR04 Ultrasonic Sensors, DHT11 Sensor, 10 DOF Module, RPLIDAR A3"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={RoboticArm}
              isBlog={false}
              title="Robotic Grabber Arm"
              description="The Robotic Grabber Arm enhance the independence of individuals with limited mobility by designing a motorized arm with a high-friction 
                           claw, customization speed, WiFi camera, and night mode LED. The device, controllable via a user-friendly mobile app, features intuitive 
                           controls adaptable for both hand and nose use. Key innovations include a mobile base with adjustable speed, an extendable arm reaching up
                           to 4 feet, and integrated real-time video feedback. Delivered within a $500 budget, the project successfully met client needs, 
                           providing a cost-effective, accessible solution that significantly improves daily living activities for users."
  

              techStack="HTML, CSS, JavaScript, Stepper Motors, DC Motors, Ball Screw Linear Actuator, Aluminum extrusions, PVC, steel rods, Git"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={UART}
              isBlog={false}
              title="FPGA UART"
              description="This project involved the design and implementation of a UART system to control traffic lights, executed as part of the Digital
                           Systems II coursework. Utilizing structural VHDL and Finite State Machine (FSM) techniques, the development included a traffic light 
                           controller, signal conversion circuits, and shift registers. A key feature of the project was the UART Transmitter, 
                           which effectively transmitted ASCII characters to an Altera DE2-115 FPGA. The system underwent extensive testing using 
                           Quartus II software, which demonstrated its capability for effective real-time debugging and communication."

              ghLink="https://github.com/MustafaBayirli/FPGA-UART" 
              
              techStack="VHDL, Altera DE2-115 FPGA, Quartus II Software, Breadboard and MAX232, Git"
              


            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={IDP}
              isBlog={false}
              title="IDP Simulator & Data Collection"
              description="The IDP Simulator: Data Collection 1.0.0 project was developed to simulate a solar nano-grid system using the BeagleBone
                           Black platform. This initiative involved creating software to effectively manage and monitor the grid by controlling relays 
                           and collecting signal data for real-time analysis. Key components of the project included developing software modules like
                           GPIO, ADC, and Task Management using technologies such as TI SYS/BIOS and C programming, interfacing through SPI, GPIO, and ADC.
                           The project emphasized rigorous module development, seamless integration, and extensive testing to ensure reliable system operation. 
                           Comprehensive documentation was maintained using Doxygen, with project management facilitated through Bitbucket and Trello."
              
              techStack="C, BeagleBone Black, TI SYS/BIOS, SRCs, Solantro cards, Doxygen, Bitbucket"
              

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SuccessAcademy}
              isBlog={false}
              title="Success Academy Website"
              description="Developed the Success Academy website as part of a User Interface Design project using the React framework. 
                           The site was designed following a user-centered design approach, incorporating semantic networks and personas to define user goals. 
                           The project involved multiple iterations of prototyping, from low-fidelity sketches to a high-fidelity interactive prototype. 
                           Key features include intuitive navigation, faceted search, and compliance with accessibility and internationalization standards, 
                           providing a user-friendly interface for students and educators alike."
              

              ghLink="https://github.com/MustafaBayirli/Success-Academy"

              techStack="HTML, CSS, JavaScript, Bootstrap, React, Git"
              

            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GeeGees }
              isBlog={false}
              title="Gee-Gees Dental Clinic Website"
              description="User Interface Design and Analysis project. Designed and developed a comprehensive, responsive website for a dental clinic, 
                           following User-Centered Design principles. The project involved creating detailed prototypes, incorporating peer feedback through 
                           iterative design, and implementing a high-fidelity interactive prototype using HTML, CSS, JavaScript, and Bootstrap. 
                           Key features of the website included service listings, advanced technology showcases, team profiles, a user-friendly appointment 
                           booking system, and contact information."
              

              ghLink="https://github.com/MustafaBayirli/Gee-GeesDeentalClinic.io"

              techStack="HTML, CSS, JavaScript, Bootstrap, Git"
              

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eHotels}
              isBlog={false}
              title="e-Hotels Management System"
              description="The e-Hotels Management System is a comprehensive web-based application that facilitates the searching and booking of hotels across North America. The system features a user-friendly interface created using HTML, CSS, and JavaScript, paired with robust server-side functionality developed in Java. At its core lies a well-structured PostgreSQL/MySQL database that manages extensive data related to hotel chains, individual hotels, rooms, customers, employees, and bookings. This project highlights seamless integration of front-end and back-end components, resulting in enhanced functionality and performance, and provides real-time booking capabilities along with efficient data management and visual representation."
              ghLink="https://github.com/MustafaBayirli/e-Hotels-Management-System"

              techStack="HTML, CSS, PHP, Java, Apache Tomcat, PostgreSQL/MySQL, Git, Eclipse IDE, JDK"
            
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BankSystem }
              isBlog={false}
              title="Bank System "
              description="developed a comprehensive account management system for a fictional bank. The project involved creating a robust system
                           to efficiently manage client accounts and transactions. Key features included functionality to read and manage client account 
                           information from structured text files, support for various transactions such as deposits, withdrawals, and checks with appropriate 
                           fee deductions and interest calculations, ensuring accurate updates and validations of client accounts based on transaction types 
                           and rules, and generating detailed reports displaying client account balances, updated in real-time after each transaction."
              

              ghLink="https://github.com/MustafaBayirli/Bank-System"

              techStack="C, C++, TypeScript, Git"
              

            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ServiceNovigrad}
              isBlog={false}
              title="Service Novigrad"
              description="The Service Navigrad aimed to create an Android application that provides government services to residents of the fictional province of Novigrad. The application is similar to real-life services like Service Ontario or Services Québec, offering functionalities such as obtaining a driver’s license, health card, or photo ID."
              ghLink="https://github.com/MustafaBayirli/Service-Novigrad"

              techStack= "Java, SQLite, Git, Android Studio,"
            
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
