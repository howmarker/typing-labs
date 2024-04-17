import React from "react";
import Title from "@/components/Title";
import { Styles } from "./styles";
import { ReactComponent as IconService1 } from "@/assets/service1.svg";
import { ReactComponent as IconService2 } from "@/assets/service2.svg";
import { ReactComponent as IconService3 } from "@/assets/service3.svg";

const Services = () => {
  return (
    <Styles>
      <div className="container">
        <div className="module">
          <Title idx="03" text="SERVICES" data-aos="fade-up" />
          <div className="content">
            <p className="text" data-aos="fade-up" data-aos-delay={100}>
              All-in-One: Marketing, Strategy, and Influencer Management Just{" "}
              <span>make a call</span> with TypingLab
            </p>
            <div className="info-list" data-aos="fade-up" data-aos-delay={200}>
              <div className="item">
                <div className="icon">
                  <IconService2 />
                </div>
                <p className="title">Content</p>
                <p className="desc">
                  Short or long form,
                  <br /> we have it covered.
                  <br /> Yes, pepe memes and dank replies too!
                </p>
              </div>
              <div className="item">
                <div className="icon">
                  <IconService1 />
                </div>
                <p className="title">Growth Strategy</p>
                <p className="desc">
                  Scaling new heights,
                  <br /> we have it covered.
                  <br />
                  Growth is not just a goal, it's our mantra.
                </p>
              </div>
              <div className="item">
                <div className="icon">
                  <IconService3 />
                </div>
                <p className="title">Marketing Campaign</p>
                <p className="desc">
                  From micro-influencers to industry giants. We handle marketing
                  campaigns with KOLs of all sizes. Choose our service, and
                  watch your brand soar!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Styles>
  );
};

export default Services;
