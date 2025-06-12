import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import '../../style.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertVariant, setAlertVariant] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message
    };

    emailjs.send(
      'service_py0angt', // Replace with your EmailJS Service ID
      'template_8j2g7ei', // Replace with your EmailJS Template ID
      templateParams,
      'fVjpVsKz7UguR8A-F' // Replace with your EmailJS User ID
    )
    .then((response) => {
      setAlertMessage('Your message has been sent successfully!');
      setAlertVariant('success');
      setShowAlert(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    })
    .catch((error) => {
      setAlertMessage('Failed to send message. Please try again later.');
      setAlertVariant('danger');
      setShowAlert(true);
      console.error('EmailJS Error:', error);
    });
  };

  return (
    <Container fluid className="contact-section">
      <Container>
        <h1 className="contact-heading">
          Get in <strong className="purple">Touch</strong>
        </h1>
        {showAlert && (
          <Alert variant={alertVariant} onClose={() => setShowAlert(false)} dismissible>
            {alertMessage}
          </Alert>
        )}
        <Row>
          <Col md={6} className="contact-form">
            <h2>Contact Form</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Label> </Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  autoComplete="name"
                />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label> </Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  autoComplete="email"
                />
              </Form.Group>

              <Form.Group controlId="formSubject">
                <Form.Label> </Form.Label>
                <Form.Control
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter subject"
                  required
                  autoComplete="off"
                />
              </Form.Group>

              <Form.Group controlId="formMessage">
                <Form.Label> </Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  required
                  autoComplete="off"
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="mt-3">
                Submit
              </Button>
            </Form>
          </Col>

          <Col md={6} className="contact-info">
            <h2>Contact Information</h2>
            <ul className="contact-details">
              <li><FaMapMarkerAlt /> Address: Ottawa, ON</li>
              <li><FaPhoneAlt /> Phone: (613) 890-7611</li>
              <li><FaEnvelope /> Email: mustafabayirli88@gmail.com</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
