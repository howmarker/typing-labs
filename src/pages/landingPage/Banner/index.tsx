import React from "react";
import { Styles } from "./styles";
import { ReactComponent as IconLeft } from "@/assets/arrow_l.svg";
import { ReactComponent as IconDown } from "@/assets/arrow_d.svg";
import { ReactTyped } from "react-typed";

const Banner = () => {
  return (
    <Styles>
      <div className="container">
        <div className="module">
          <p className="title" data-aos="fade-up">
            TYPING
            <ReactTyped strings={["LABS"]} typeSpeed={200} loop />
          </p>
          <p className="title-bt" data-aos="fade-up" data-aos-delay={100}>
            A SUPER MCN ON BLOCKCHAIN
          </p>
          <p className="desc" data-aos="fade-up" data-aos-delay={200}>
            The Web3 Native Growth Agency Growing your Favourite Projects
          </p>
          <button className="btn" data-aos="fade-up" data-aos-delay={300}>
            BOOKING
            <span className="icon">
              <IconLeft />
            </span>
          </button>
        </div>
        <div className="scroll-down">
          <IconDown />
          <p className="text">Scroll down</p>
        </div>
      </div>
    </Styles>
  );
};

export default Banner;
