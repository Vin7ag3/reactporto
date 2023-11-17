import React, { useState } from "react";
import { Col, Container } from "react-bootstrap";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

// handle form input changes 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

// validate using regex
  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

// handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
// check fields and if valid email format
    if (!name || !email || !message) {
      alert("Fields are required");
    } else if (!isEmailValid(email)) {
      alert("Invalid email address");
    } else {
      alert(`Hello ${name}, I'll contact you at ${email} shortly.`);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }
  };

// contact component
  return (
    <Container>
      <Col>
        <h1 className="display-4 mb-4">Contact</h1>
        <hr className="t_border my-4 ml-0 text-left" />
      </Col>
      <form
        id="form"
        onSubmit={handleSubmit}
        encType='multipart/form-data'
      >
        <input
          id="name"
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          id="email"
          type="text"
          placeholder="E-mail"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          id="message"
          placeholder="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <input id="submit" type="submit" value="Submit" />
      </form>
    </Container>
  );
};

// export contact
export default Contact;
