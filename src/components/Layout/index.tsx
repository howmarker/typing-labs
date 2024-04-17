import React, { ReactNode } from "react";
import { Styles } from "./styles";
import Header from "../Header";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Styles>
      <Header />
      <div className="layout-content">{children}</div>
    </Styles>
  );
};

export default Layout;
