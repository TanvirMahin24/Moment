import React from "react";
import aboutBg from "../assets/images/aboutBgMin.png";
import Header from "../components/layout/Header";
const About = () => {
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
    </div>
  );
};

export default About;
