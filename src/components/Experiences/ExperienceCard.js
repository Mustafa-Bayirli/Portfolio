import React from "react";
import Card from "react-bootstrap/Card";

function ExperienceCard(props) {
  return (
    <Card className="experience-card-view">
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.date}</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">{props.company}</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">{props.location}</Card.Subtitle> 
        <Card.Text style={{ textAlign: "justify" }}>
          <ul>
            {props.description.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ExperienceCard;
