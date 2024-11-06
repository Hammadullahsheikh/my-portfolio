import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Handle form data change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs.send(
      'service_39aq585',  // Your EmailJS Service ID
      'template_vlkjby3',  // Your EmailJS Template ID
      formData,            // The form data (name, email, message)
      'Eb35rbZUIbX_tU4Hk'  // Your EmailJS User ID
    )
    .then((result) => {
      console.log('Email sent successfully:', result.text);
    }, (error) => {
      console.log('Error sending email:', error.text);
    });
  };

  return (
    <div className="contact-form mt-30">
      <h1 className='m-10'>Contact Me</h1>
      <form className='mt-10' onSubmit={handleSubmit}>
        <div >
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
