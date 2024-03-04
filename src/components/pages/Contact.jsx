// Contact Component

import React, { useState } from "react";
import imagePhone from "../../assets/images/smartphone_488.png";
import imageEmail from "../../assets/images/email_4546924.png";
import imageLinkedIn from "../../assets/images/linkedin_2504923.png";
import imageGitHub from "../../assets/images/github_733609.png";


function ContactForm() {
  // Setting initial state to an object
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    // Updating the input's state
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Reset form fields
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="container-fluid">
      <div className="row">

        {/* Contact page - left side - BEGIN */}
        <div className="col-md-6">
          <h3>About Me</h3>
          <p>
            Feel free to contact me using the form below or directly at my email
            address: 'timanand@gmail.com'.
          </p>
          <p>
            Whether you have questions about my services, want to discuss a
            project, or just want to say hi, I'm here to help. Your message
            matters, and I'll respond quickly. I value clear communication and
            promise to assist you. Just fill out the form with your details, and
            I'll get back to you soon.
          </p>
          <p>Thanks for reaching out!</p>

          <div className="contact-info">
            <img
              src={imagePhone}
              alt="Mobile phone icon"
              height="30"
              width="30"
            />
            &nbsp;&nbsp;+44 7393 637307 (London)
          </div>


          <div className="contact-info">

            <a href="mailto:timanand@gmail.com">
              <img src={imageEmail} alt="Email icon" height="30" width="30"/>
            </a>
            &nbsp;&nbsp;
            <a href="mailto:timanand@gmail.com">timanand@gmail.com</a>
          </div>

          <div className="contact-info">
            <a href="https://www.linkedin.com/in/arvinder-anand-6913071ab">
              <img src={imageLinkedIn} alt="Linked In icon" height="30" width="30"/>
            </a>
            <a href="https://www.linkedin.com/in/arvinder-anand-6913071ab"></a>
            &nbsp;&nbsp;&nbsp;

            <a href="https://github.com/timsbootcamp">
              <img src={imageGitHub} alt="Git Hub icon" height="30" width="30"/>
            </a>
            <a href="https://github.com/timsbootcamp"></a>
          </div>

        </div>
        {/* Contact page - left side - END */}

        
        {/* Contact page - right side - BEGIN */}
        <div className="col-md-6">

          <form onSubmit={handleSubmit} className="contactform">
            <div className="contact-form">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control short-input"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control short-input"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control short-input"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary button">
                Submit
              </button>
            </div>
          </form>
        </div>
        {/* Contact page - right side - END */}

      </div>
    </div>
  );
}

export default ContactForm;
