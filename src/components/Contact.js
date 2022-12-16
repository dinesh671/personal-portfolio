import {React, useState} from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import contactImg from "../assets/img/contact-img.svg"
import TrackVisibility from 'react-on-screen';

function Contact() {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText('Sending...');
    let response = await fetch('http://localhost:5000/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText('Send');
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code === 404) {
      setStatus({
        succes: false,
        message: 'Something went wrong, please try again later.',
      });
    } else {
      setStatus({
        succes: true, message: 'Message sent successfully'
      });
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <img src={contactImg} alt="Contact Us" />
          </Col>
          <Col size={12} md={6}>
            <div>
              <h2>Get In Touch</h2>
              <form onSubmit={handleSubmit}>
                <Row>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="text"
                      value={formDetails.firstName}
                      placeholder="First Name"
                      required
                      onChange={(e) =>
                        onFormUpdate('firstName', e.target.value)
                      }
                    />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="text"
                      value={formDetails.lastName}
                      placeholder="Last Name"
                      onChange={(e) => onFormUpdate('lastName', e.target.value)}
                    />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="email"
                      value={formDetails.email}
                      placeholder="Email Address"
                      required
                      onChange={(e) => onFormUpdate('email', e.target.value)}
                    />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="tel"
                      value={formDetails.phone}
                      required
                      placeholder="Phone No."
                      onChange={(e) => onFormUpdate('phone', e.target.value)}
                    />
                  </Col>
                  <Col size={12} className="px-1">
                    <textarea
                      rows="6"
                      value={formDetails.message}
                      placeholder="Message"
                      onChange={(e) => onFormUpdate('message', e.target.value)}
                    ></textarea>
                    <button type="submit">
                      <span>{buttonText}</span>
                    </button>
                  </Col>
                  {status.message && (
                    <Row style={{ padding: '20px 0' }}>
                      <p
                        className={
                          status.success === false ? 'danger' : 'success'
                        }
                      >
                        {status.message}
                      </p>
                    </Row>
                  )}
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact