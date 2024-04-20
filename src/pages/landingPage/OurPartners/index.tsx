import React from "react";
import { Styles } from "./styles";
import Title from "@/components/Title";
import Marquee from "react-fast-marquee";
import { dataPartner } from "./data";

const OurPartners = () => {
  return (
    <Styles id="partners">
      <div className="container">
        <div className="module">
          <Title idx="05" text="OUR PARTNERS" data-aos="fade-up" />
          <div className="content">
            <p className="text" data-aos="fade-up" data-aos-delay={100}>
              We pride ourselves on our professionalism and firmly say no to any
              abruptness! We are committed to partnering with{" "}
              <span>long-term projects.</span>
            </p>
          </div>
        </div>
      </div>
      <div className="partners" data-aos="fade-up" data-aos-delay={200}>
        <Marquee gradient={false} pauseOnHover speed={60} direction="left">
          <div className="data-list">
            {dataPartner.map((el, idx) => {
              return (
                <div className="partner" key={idx}>
                  <img src={`/images/partner/${el}`} alt="" />
                </div>
              );
            })}
          </div>
        </Marquee>
        <Marquee
          gradient={false}
          pauseOnHover
          speed={60}
          direction="right"
          style={{ marginTop: 23 }}
        >
          <div className="data-list">
            {dataPartner.map((el, idx) => {
              return (
                <div className="partner" key={idx}>
                  <img src={`/images/partner/${el}`} alt="" />
                </div>
              );
            })}
          </div>
        </Marquee>
      </div>
    </Styles>
  );
};

export default OurPartners;
