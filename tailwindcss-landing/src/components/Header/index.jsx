import React from "react";
import { ReactComponent as LogoIcon } from "../../images/logo.svg";
import { Navigation } from "../Navigation";
import { Menu } from "../Menu";
import { COMPANY, FEATURES } from "./DataLinks";

export const Header = () => {
  return (
    <header className="flex">
      <LogoIcon />
      <nav className="flex space-x-6 ml-8 items-ceter">
        <Navigation text="Feature">
          <Menu items={FEATURES} />
        </Navigation>
        <Navigation text="Company">
          <Menu items={COMPANY} />
        </Navigation>
        <Navigation text="Careers"></Navigation>
        <Navigation text="About"></Navigation>
      </nav>
    </header>
  );
};
