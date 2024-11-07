// App.js

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const App = () => {
  const form = useRef();

  // Send email function
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_39aq585', 'template_vlkjby3', form.current, 'Eb35rbZUIbX_tU4Hk')
      .then(
        () => {
          alert('Email sent successfully!');
        },
        (error) => {
          console.error('Failed...', error.text);
          alert('Failed to send email. Please try again.');
        }
      );
  };

  return (
    <div className="flex flex-col items-center  justify-center min-h-screen bg-gradient-to-r  p-6">
      <h2 className="text-4xl sm:text-5xl font-extrabold mt-[80px] text-yellow-600 mb-8">Contact Us</h2>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-yellow-500 shadow-2xl rounded-3xl  p-8 w-full sm:w-96 max-w-lg transform transition-all duration-300 ease-in-out "
      >
        {/* Name Field */}
        <div className="mb-6">
          <label className="block text-gray-700 text-lg font-semibold mb-2">Name</label>
          <input
            type="text"
            name="hammad_ullah" // Must match {{name}} in EmailJS template
            className="shadow-lg border rounded-full w-full py-3 px-4 text-gray-700 focus:ring-2 focus:ring-yellow-500 transition duration-300 ease-in-out"
            required
          />
        </div>

        {/* Email Field */}
        <div className="mb-6">
          <label className="block text-gray-700 text-lg font-semibold mb-2">Email</label>
          <input
            type="email"
            name="from_email" // Must match {{email}} in EmailJS template
            className="shadow-lg border rounded-full w-full py-3 px-4 text-gray-700 focus:ring-2 focus:ring-yellow-500 transition duration-300 ease-in-out"
            required
          />
        </div>

        {/* Message Field */}
        <div className="mb-6">
          <label className="block text-gray-700 text-lg font-semibold mb-2">Message</label>
          <textarea
            name="message" // Must match {{message}} in EmailJS template
            className="shadow-lg border rounded-xl w-full py-3 px-4 text-gray-700 focus:ring-2 focus:ring-yellow-500 transition duration-300 ease-in-out"
            rows="5"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;
