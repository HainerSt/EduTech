import React, { useState } from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";
import { Link } from "react-scroll";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "42e66ad7-dc13-4da3-915e-479405b66fde");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  const [val, setVal] = useState("");
  const [tel, setTel] = useState("");
  const [mes, setMes] = useState("");

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send Us a Message <img src={msg_icon} />
        </h3>
        <p>
          Our dedicated team is always ready to provide you with quick responses and quality support.
          <br />
          <br />
          You can contact us using the following methods: by filling out the contact form on our website, by sending an
          email, or by calling us.
        </p>
        <br />
        <ul>
          <li>
            <a
              href="mailto: contact@edutech.ro?subject=Contact&body=Please send me the offers for the Webinar program. Regards, Stefan H."
              target="_blank"
            >
              <img src={mail_icon} />
              contact@edutech.ro
            </a>
          </li>
          <li>
            <img src={phone_icon} />
            +40 722 603 726
          </li>
          <li>
            <a href="https://maps.app.goo.gl/eMNkysyKsZvASwZo6" target="_blank">
              <img src={location_icon} />
              Oradea, Str. Nufărului 30 <br />
            </a>
          </li>
        </ul>
      </div>

      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Name:</label>
          <input
            value={val}
            onChange={(e) => {
              setVal(e.target.value);
            }}
            type="text"
            placeholder="Enter Your Name"
            name="name"
            required
          />

          <label>Phone:</label>
          <input
            onChange={(e) => setTel(e.target.value)}
            type="phone"
            name="phone"
            placeholder="Enter Your Phone Number"
            required
          />
          <label>Your message:</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            value={mes}
            onChange={(e) => setMes(e.target.value)}
            required
          ></textarea>

          <button type="submit" className="btn dark-btn">
            Send<img src={white_arrow}></img>
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
