import React from "react";
import bgImg1 from "../assets/images/topRightFAQ.png";
import bgImg2 from "../assets/images/bottomLeftFAQ.png";
import Header from "../components/layout/Header";
import "./FAQ.scss";

const FAQ = () => {
  return (
    <div className="faq">
      <div className="faq__top-left">
        <img src={bgImg1} alt="" />
      </div>
      <Header about className="about__header" />
      <div className="faq__content">
        <div className="content">
          <h2 className="">
            <span className="text-blue">F</span>requently{" "}
            <span className="text-blue">A</span>sked{" "}
            <span className="text-blue">Q</span>uestions
          </h2>
          <h4>What is Moment?</h4>
          <p>
            Moment is a customized accessories online store. We deliver some
            quality products to make your home and life more beautiful.
          </p>
          <div className="faq__line"></div>
          <h4>Do you give free home delivery service all over Bangladesh?</h4>
          <p>
            Currently, we are operating from Rangpur City. So, We are only
            giving a free home delivery service throughout Rangpur. But in the
            future, we may start a free home delivery service all over the
            country.
          </p>
          <div className="faq__line"></div>
          <h4>Can I make a gift with my own design?</h4>
          <p>
            Yes. We provide gifts and accessories with your very own design. We
            give our customers every help that they can make the dream gifts and
            accessories came true.
          </p>
          <div className="faq__line"></div>
          <h4>Can you design t-shirt for me?</h4>
          <p>
            Yes. Moment has a creative graphics designing team of its own. So,
            If you want a graphics designer for your projects and other need we
            are always there for you at a low cost.
          </p>
          <div className="faq__line"></div>
          <h4>Can you tell me about your payment methods?</h4>
          <p>
            Currently, Moment receives payment throughout Bkash. We are trying
            our best to add more payment methodes for our customers.
          </p>
          <div className="faq__line"></div>
          <h4>How to become partner with Moment?</h4>
          <p>
            We don't have any physical stores in any place. So we are currently
            in need of partners for Moment. If you want to have Moment products
            and start a store on your won we are happy to deliver you our
            products. Feel free to contact us.
          </p>
        </div>
      </div>
      <div className="faq__bottom">
        <img src={bgImg2} alt="" />
      </div>
    </div>
  );
};

export default FAQ;
