import React from "react";
import emailjs from "emailjs-com";
import "./style.css";

const ContactUs = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_q1vle8s",
        "template_0q1uen4",
        e.target,
        "user_D6trSuXC3HqCX9ckPJGvp"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className="contact-us">
      <div className="contact-container">
        <div className="contact-us-title-container">
          <h2 className="contact-us-title">Contact Us</h2>
          <div>
            <p>
              Car Club's goal is to provide the best customer service as soon as
              possible to all our users. If you are having any issues or
              problems with our site please fill in the fields below so we can
              assist you.
            </p>
          </div>
        </div>
        <form onSubmit={sendEmail}>
          <div className="form-container">
            <div className="form-email">
              <label>Enter Email</label>
              <input type="text" name="email" placeholder="Write here..." />
            </div>
            <div className="form-subject">
              <label>Enter Subject</label>
              <input type="text" name="subject" placeholder="Write here..." />
            </div>
            <div className="form-message">
              <label>Enter Message</label>
              <textarea
                classname="eMessage"
                type="text"
                name="message"
                rows="3"
                placeholder="Write here..."
              />
            </div>
            <div>
              <button className="submit-btn" type="submit" value="send">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ContactUs;
