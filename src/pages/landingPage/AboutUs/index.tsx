import React from "react";
import { Styles } from "./styles";
import Title from "@/components/Title";

const AboutUs = () => {
  return (
    <Styles>
      <div className="container">
        <div className="module">
          <Title idx="01" text="ABOUT US" data-aos="fade-up" />
          <div className="content">
            <p className="text" data-aos="fade-up" data-aos-delay={100}>
              We bridge the gap between <span>Web3 projects</span> and{" "}
              <span>Influencers</span>, unleashing their imagination and
              execution in the world of Web3 marketing
            </p>
            <div className="info" data-aos="fade-up" data-aos-delay={200}>
              <div className="info-list">
                <div className="item">
                  <p className="item-desc">Network</p>
                  <p className="item-title">100+ KOLs</p>
                </div>
                <div className="item">
                  <p className="item-desc">
                    NetwoAccumulative Global Audiencerk
                  </p>
                  <p className="item-title">100M+</p>
                </div>
                <div className="item">
                  <p className="item-desc">Accumulative Global Impressions</p>
                  <p className="item-title">500+/month</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Styles>
  );
};

export default AboutUs;
