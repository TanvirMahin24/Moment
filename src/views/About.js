import React, { useEffect } from "react";
import aboutBg from "../assets/images/aboutBgMin.png";
import Header from "../components/layout/Header";
import "./About.scss";
const About = () => {
  useEffect(() => {});
  return (
    <div className="about">
      <div className="about__bg">
        <img src={aboutBg} alt="" />
      </div>
      <Header about className="about__header" />
      <div className="about__contents">
        <h1>About Moment</h1>
        <p>
          Moment is a customized accessories online store. We deliver some
          quality products to make your home and life more beautiful. We are
          always trying to provide some quality products to our customer’s hands
          at an affordable price. Quality is our main focus and we make sure “
          You get what you see”. We ship products all over Bangladesh via
          Courier Services.
        </p>
        <p>
          <span
            style={{ color: "#fff", fontSize: "1.6rem", fontWeight: "bolder" }}
          >
            Contact
          </span>
          <br />
          Noor Ajmir Tanvir Mahin <br />
          Owner of Moment <br />
          Currently student of RUET <br />
          Email: tanvirmahin24@gmail.com <br />
          Facebook: https://fb.me/tanvir.mahin.1
        </p>
      </div>
      <section id="hire">
        <div class="container">
          <form
            id="contact"
            name="contact"
            netlify
            netlify-honeypot="bot-field"
          >
            <h3>Contact Form</h3>
            <h4>Contact us for any query</h4>
            <fieldset>
              <input
                placeholder="Name"
                type="text"
                tabindex="1"
                name="Name"
                required
                autofocus
              />
            </fieldset>
            <fieldset>
              <input
                placeholder="Email Address"
                type="email"
                name="Email"
                tabindex="2"
                required
              />
            </fieldset>
            <fieldset>
              <input
                placeholder="Phone Number"
                type="tel"
                name="Number"
                tabindex="3"
                required
              />
            </fieldset>

            <fieldset>
              <textarea
                placeholder="Type message here...."
                tabindex="5"
                name="Message"
                required
              ></textarea>
            </fieldset>
            <fieldset>
              <button
                name="submit"
                type="submit"
                id="contact-submit"
                data-submit="...Sending"
              >
                Submit
              </button>
            </fieldset>
          </form>
        </div>
      </section>
    </div>
  );
};

export default About;
