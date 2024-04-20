import React, { useState } from "react";
import { Styles } from "./styles";
import Title from "@/components/Title";
import { ReactComponent as IconArrow } from "@/assets/arrow_process.svg";
import classNames from "classnames";

const Process = () => {
  const [step, setStep] = useState(1);
  return (
    <Styles>
      <div className="container">
        <div className="module">
          <Title idx="04" text="PROCESS" data-aos="fade-up" />
          <div className="content">
            <p className="text" data-aos="fade-up" data-aos-delay={100}>
              Supercharge Your Protocol in <span>3 Steps</span>
            </p>
            <div className="step-list" data-aos="fade-up" data-aos-delay={200}>
              <div
                className={`item ${classNames({ active: step === 1 })}`}
                onClick={() => setStep(1)}
              >
                <div className="left">
                  <span className="idx">1</span>
                  <div className="item-content">
                    <p className="title">Step 1</p>
                    <p className="desc">
                      Discovery Call: In a quick, insightful call, we understand
                      your business needs and goals.
                    </p>
                  </div>
                </div>
                <div className="icon">
                  <IconArrow />
                </div>
              </div>
              <div
                className={`item ${classNames({ active: step === 2 })}`}
                onClick={() => setStep(2)}
              >
                <div className="left">
                  {" "}
                  <span className="idx">2</span>
                  <div className="item-content">
                    <p className="title">Step 2</p>
                    <p className="desc">
                      Join Our Elite Circle: We onboard you to our network,
                      crafting a unique strategy for your business
                    </p>
                  </div>
                </div>
                <div className="icon">
                  <IconArrow />
                </div>
              </div>
              <div
                className={`item ${classNames({ active: step === 3 })}`}
                onClick={() => setStep(3)}
              >
                <div className="left">
                  <span className="idx">3</span>
                  <div className="item-content">
                    <p className="title">Step 3</p>
                    <p className="desc">
                      Join Our Elite Circle: We onboard you to our network,
                      crafting a unique strategy for your business
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Styles>
  );
};

export default Process;
