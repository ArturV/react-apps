import React from "react";
import { ReactComponent as LogoIcon } from "../../images/logo.svg";
import { ReactComponent as MenuIcon } from "../../images/icon-menu.svg";
import { Navigation } from "../Navigation";
import { Menu } from "../Menu";
import { COMPANY, FEATURES } from "./DataLinks";
import { Button } from "../Button";

export const Header = () => {
  return (
    <header className="flex items-center">
      <LogoIcon />
      <nav className="hidden xl:flex space-x-6 ml-8 items-ceter">
        <Navigation text="Feature">
          <Menu items={FEATURES} />
        </Navigation>
        <Navigation text="Company">
          <Menu items={COMPANY} />
        </Navigation>
        <Navigation text="Careers"></Navigation>
        <Navigation text="About"></Navigation>
      </nav>

      <div className="hidden ml-auto xl:flex space-x-5">
        <Button>Login</Button>
        <Button hasBorder="true">Register</Button>
      </div>
      <div className="flex xl:hidden ml-auto cursor-pointer z-30">
        <MenuIcon />
      </div>
    </header>
  );
};
