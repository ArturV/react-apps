import React from "react";

export const MenuItems = ({ text = "", icon }) => {
  return (
    <div>
      {icon}
      <span>{text}</span>
    </div>
  );
};
