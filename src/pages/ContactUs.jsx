import React from "react";
import { motion } from "framer-motion";
import "./ContactUs.css"; // Import updated CSS

const ContactUs = () => {
  return (
    <div className="contact-page">
      <div className="contact-wrapper">
        <motion.div
          className="contact-container"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Contact Us Tag */}
          <p className="tag">Contact Us</p>

          {/* Title */}
          <h1 className="title">Let's Get In Touch.</h1>

          {/* Subtitle with Email */}
          <p className="subtitle">
            Or just reach out manually to{" "}
            <a href="mailto:hello@noorfragrance.in">hello@noorfragrance.in</a>
          </p>

          {/* Contact Form */}
          <form className="contact-form">
            <div className="input-group">
              <input type="text" placeholder="Full Name" required />
            </div>
            <div className="input-group">
              <input type="email" placeholder="Email Address" required />
            </div>
            <div className="input-group">
              <input type="tel" placeholder="Phone Number" required />
            </div>
            <div className="input-group">
              <textarea placeholder="Message" maxLength="300" required></textarea>
            </div>

            {/* Checkbox for Privacy Policy */}
            <div className="checkbox">
              <input type="checkbox" id="privacy" required />
              <label htmlFor="privacy">
                I hereby agree to the <a href="#">Privacy Policy</a> terms.
              </label>
            </div>

            {/* Submit Button */}
            <motion.button
              className="submit-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit Form →
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;

