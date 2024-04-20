import React from "react";
import { Styles } from "./styles";
import Title from "@/components/Title";
import { ReactComponent as IconX } from "@/assets/icon-x.svg";
import { ReactComponent as IconTime } from "@/assets/icon-time.svg";
import { ReactComponent as IconAdd } from "@/assets/icon-add.svg";
import { ReactComponent as IconSupport } from "@/assets/icon-support.svg";
import { ReactComponent as IconTwitter } from "@/assets/x.svg";
import { ReactComponent as IconTele } from "@/assets/telegram.svg";
import { Link } from "react-router-dom";

const OurTeam = () => {
  return (
    <Styles id="team">
      <div className="container">
        <div className="module">
          <div className="head">
            <Title idx="06" text="OUR TEAM" data-aos="fade-up" />
            <p className="title" data-aos="fade-up" data-aos-delay={100}>
              Our team
            </p>
          </div>
          <div className="content">
            <div className="team-list" data-aos="fade-up" data-aos-delay={200}>
              <div className="item">
                <span className="founder">Founder</span>
                <div className="avt">
                  <img src="/images/home/user1.png" alt="" />
                </div>
                <p className="name">Andrew</p>
                <div className="info">
                  <div className="info_item">
                    <span className="icon">
                      <IconX />
                    </span>
                    <p className="text">
                      @0xAndrewmoh - <span>39.5k</span> followers
                    </p>
                  </div>
                  <div className="info_item">
                    <span className="icon">
                      <IconTime />
                    </span>
                    <p className="text">
                      <span>5</span> years in Defi space
                    </p>
                  </div>
                  <div className="info_item">
                    <span className="icon">
                      <IconAdd />
                    </span>
                    <p className="text">
                      Currently being{" "}
                      <span>
                        BNB Chain KOL, APX Finance & Entangle Ambassador
                      </span>
                    </p>
                  </div>
                  <div className="info_item">
                    <span className="icon">
                      <IconSupport />
                    </span>
                    <p className="text">
                      Supported <span>70+</span> global projects
                    </p>
                  </div>
                </div>
                <div className="social">
                  <Link to="" className="link">
                    <IconTwitter />
                  </Link>
                  <Link to="" className="link">
                    <IconTele />
                  </Link>
                </div>
              </div>

              <div className="item">
                <span className="founder">Founder</span>
                <div className="avt">
                  <img src="/images/home/user2.png" alt="" />
                </div>
                <p className="name">Kent Defi</p>
                <div className="info">
                  <div className="info_item">
                    <span className="icon">
                      <IconX />
                    </span>
                    <p className="text">@KentDefi</p>
                  </div>
                  <div className="info_item">
                    <span className="icon">
                      <IconTime />
                    </span>
                    <p className="text">
                      <span>4</span> years in Defi space
                    </p>
                  </div>
                  <div className="info_item">
                    <span className="icon">
                      <IconAdd />
                    </span>
                    <p className="text">
                      <span>5</span> years in Project Management
                    </p>
                  </div>
                  <div className="info_item">
                    <span className="icon">
                      <IconSupport />
                    </span>
                    <p className="text">
                      Supported <span>40+</span> global projects
                    </p>
                  </div>
                </div>
                <div className="social">
                  <Link to="" className="link">
                    <IconTwitter />
                  </Link>
                  <Link to="" className="link">
                    <IconTele />
                  </Link>
                </div>
              </div>
              <div className="item">
                <span className="founder">Founder</span>
                <div className="avt">
                  <img src="/images/home/user3.png" alt="" />
                </div>
                <p className="name">Gohan</p>
                <div className="info">
                  <div className="info_item">
                    <span className="icon">
                      <IconX />
                    </span>
                    <p className="text">
                      @0x99Gohan - <span>17.5k</span> followers
                    </p>
                  </div>
                  <div className="info_item">
                    <span className="icon">
                      <IconTime />
                    </span>
                    <p className="text">
                      <span>7</span> years in Defi space
                    </p>
                  </div>
                  <div className="info_item">
                    <span className="icon">
                      <IconAdd />
                    </span>
                    <p className="text">
                      Currently being{" "}
                      <span>
                        BNB Chain KOL, Immutable & Nakamoto Games Ambassador
                      </span>
                    </p>
                  </div>
                  <div className="info_item">
                    <span className="icon">
                      <IconSupport />
                    </span>
                    <p className="text">
                      Supported <span>40+</span> global projects
                    </p>
                  </div>
                </div>
                <div className="social">
                  <Link to="" className="link">
                    <IconTwitter />
                  </Link>
                  <Link to="" className="link">
                    <IconTele />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Styles>
  );
};

export default OurTeam;
