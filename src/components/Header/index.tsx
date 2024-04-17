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
              <Link to="" className="link">
                Team
              </Link>
              <Link to="" className="link">
                Partners
              </Link>
              <Link to="" className="link">
                Pitchdeck
              </Link>
            </div>
          </div>
          <div className="header-action">
            <div className="social">
              <Link to="" className="item">
                <IconX />
              </Link>
              <Link to="" className="item">
                <IconTelegram />
              </Link>
            </div>
            <button className="btn">Contract</button>
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
