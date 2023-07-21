import React from "react";
import { MenuItems } from "../MenuItems";

export const Menu = ({ items = [] }) => {
  return (
    <div className="flex flex-col px-3 py-2 bl-almost-white drop-shadow rounded-lg absolute top-10 right-0 w-36 space-y-2 z-30">
      {items.map(({ text, icon }) => (
        // <span>{text}</span>
        <MenuItems key={text} text={text} icon={icon} />
      ))}
    </div>
  );
};
