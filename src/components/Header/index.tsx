import React, { useState } from "react";
import { Styles } from "./styles";
import { Link } from "react-router-dom";
import { ReactComponent as IconX } from "@/assets/x.svg";
import { ReactComponent as IconTelegram } from "@/assets/telegram.svg";
import useCheckScrollY from "@/hooks/useCheckScrollY";
import classNames from "classnames";
import { HiMiniBars3 } from "react-icons/hi2";
import { MdClose } from "react-icons/md";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const isScroll = useCheckScrollY();

  const handleClickScroll = (id: string) => {
    const element = document.getElementById(id);
    console.log(element);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Styles className={classNames({ isScroll })}>
      <div className="container">
        <div className="header-module">
          <Link to="" className="logo">
            <img src="/images/logo-part1.png" alt="" className="part1" />
            <img src="/images/logo-part2.png" alt="" className="part2" />
          </Link>
          <div className={`header-nav ${classNames({ isSidebar: toggle })}`}>
            <span className="close" onClick={() => setToggle(false)}>
              <MdClose size={30} color="#fff" />
            </span>
            <div className="nav-list">
              <Link
                to="/#team"
                className="link"
                onClick={() => handleClickScroll("team")}
              >
                Team
              </Link>
              <Link
                to="/#partners"
                className="link"
                onClick={() => handleClickScroll("partners")}
              >
                Partners
              </Link>
              <Link to="" className="link">
                Pitchdeck
              </Link>
            </div>
          </div>
          <div className="header-action">
            <div className="social">
              <Link
                to="https://twitter.com/0xtypinglab"
                target="__blank"
                className="item"
              >
                <IconX />
              </Link>
              <Link to="" target="__blank" className="item">
                <IconTelegram />
              </Link>
            </div>
            <button className="btn">Contact</button>
            <span className="toggle" onClick={() => setToggle(!toggle)}>
              <HiMiniBars3 size={36} color="#fff" />
            </span>
          </div>
        </div>
      </div>
    </Styles>
  );
};

export default Header;
