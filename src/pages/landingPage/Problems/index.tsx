import React from "react";
import { Styles } from "./styles";
import Title from "@/components/Title";
import { ReactComponent as IconArrow } from "@/assets/arrow_l.svg";

const Problems = () => {
  return (
    <Styles>
      <div className="container">
        <div className="module">
          <Title idx="02" text="PROBLEMS" data-aos="fade-up" />
          <div className="content" data-aos="fade-up" data-aos-delay={100}>
            <div className="info">
              <div className="item">
                <p className="idx">01.</p>
                <div className="item-content">
                  <p className="title">Lack of Awareness</p>
                  <p className="desc">
                    Projects struggle with <span>low visibility</span> and{" "}
                    <span>awareness</span> within the market
                  </p>
                </div>
              </div>
              <div className="item">
                <p className="idx">02.</p>
                <div className="item-content">
                  <p className="title">Trust and Credibility</p>
                  <p className="desc">
                    Challenging in building <span>trust</span> due to the
                    prevalence of scams and fraud
                  </p>
                </div>
              </div>
              <div className="item">
                <p className="idx">03.</p>
                <div className="item-content">
                  <p className="title">TCompetitive Landscape</p>
                  <p className="desc">
                    Challenging for new projects to <span>stand out</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="pitchdeck">
              <p className="text">
                We are HERE to address <span>YOUR PROBLEMS</span>
              </p>
              <button className="btn">
                Go pitchdeck{" "}
                <span className="icon">
                  <IconArrow />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Styles>
  );
};

export default Problems;
