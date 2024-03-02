import React, { useState } from 'react';

function ContactForm() {
  // Setting initial state to an object
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;
    
    // Updating the input's state
    // setFormData(prevState => ({ 
    //   ...prevState,
    //   [name]: value
    // }));
    
    // Updating the input's state
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form fields
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          <h3>About Me</h3>
          <p>
          Feel free to contact me using the form below.</p> 
          
          <p>Whether you have questions about my services, 
          want to discuss a project, or just want to say hi, I'm here to help. Your message matters, 
          and I'll respond quickly. I value clear communication and promise to assist you. 
          Just fill out the form with your details, and I'll get back to you soon.</p> 
          <p>Thanks for reaching out!</p>
        </div>
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="contact-form">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control short-input" id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control short-input" id="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control short-input" id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
