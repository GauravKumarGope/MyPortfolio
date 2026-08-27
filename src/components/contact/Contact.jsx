import "./Contact.css";
import contactItems from "./Contact.js";

import logo from "../../assets/Logo.png";
import avatar from "../../assets/avatar.png";

function Contact() {
  return (
    <section className="contact" id="contact">

      {/* Brand */}
      <div className="contact-brand">
        <img src={logo} alt="GK logo" />

        <h2>GAURAV KUMAR GOPE</h2>
        <p>SOFTWARE ENGINEER</p>
      </div>

      {/* Main heading */}
      <div className="contact-heading">
        <h1>
          LET’S
          <br />
          CONNECT.
        </h1>

        <p>
          I’m always open to discuss new ideas,
          <br />
          opportunities and interesting projects.
        </p>
      </div>

      {/* Contact cards */}
      <div className="contact-cards">
        {contactItems.map((item, index) => (
          <a
            key={item.id}
            href={item.href}
            className={`contact-card card-${index + 1}`}
            target="_blank"
            rel="noreferrer"
          >
            <div className="card-icon">
              <img src={item.icon} alt="" />
            </div>

            <h3>{item.title}</h3>

            <p>{item.info}</p>

            <span className="card-arrow">→</span>
          </a>
        ))}
      </div>

      {/* Avatar */}
      <div className="contact-avatar">
        <img src={avatar} alt="Gaurav" />
      </div>

      {/* Bottom */}
      <div className="contact-bottom">
        <span>↑ BACK TO TOP</span>
        <div />
      </div>

    </section>
  );
}

export default Contact;