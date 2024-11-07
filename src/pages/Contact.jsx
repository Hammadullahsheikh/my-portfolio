import React, { useState } from "react";
import emailjs from "emailjs-com";
import './index.css';  // Correct the import to point to the correct path

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS Integration
    emailjs
      .sendForm(
        "service_39aq585",  // Replace with your EmailJS Service ID
        "template_vlkjby3",  // Replace with your EmailJS Template ID
        e.target,
        "Eb35rbZUIbX_tU4Hk"  // Replace with your EmailJS User ID
      )
      .then(
        (result) => {
          console.log("Success:", result.text);
          setIsSubmitted(true);  // Success message
          setFormData({ name: "", email: "", message: "" });  // Reset form
        },
        (error) => {
          console.error("Error:", error.text);
          setError("Something went wrong. Please try again later.");
        }
      );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Contact Us</h1>

        {/* Success Message */}
        {isSubmitted && <p className="text-green-600 text-center mb-4">Thank you for contacting us! We will get back to you soon.</p>}
        
        {/* Error Message */}
        {error && <p className="text-red-600 text-center mb-4">{error}</p>}
        
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
