import React from "react";
import "../assets/css/Contact.css";

const Contact = () => {
  const [showContact, setShowContact] = React.useState(false);
  const onClick = () => setShowContact(true);
  return (
    <div className="contact-wrapper">
      <div className="contact-header">
        <header>Contact Me</header>
      </div>

      <div className="contact-container">
        <p>
          Disclaimer: Please be advised that I do not wish to receive any
          unsolicited emails, spam, or pointless messages. Any communication
          directed to my email address should be relevant, meaningful, and in
          line with the purpose of our interaction. Any misuse or violation of
          this request may result in the sender being blocked or reported as
          appropriate. Thank you for respecting my preferences.
        </p>
        <input
          type="submit"
          className="contact-btn"
          value="Contact Info"
          onClick={onClick}
        />
        {showContact ? <Results /> : null}
      </div>
    </div>
  );
};

const Results = () => (
  <div id="results" className="contact">
    Email: Devon.eadie@yahoo.com
  </div>
);

export default Contact;
