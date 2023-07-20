import React from "react";

export const Menu = ({ items = [] }) => {
  return (
    <div>
      {items.map(({ text }) => (
        <span>{text}</span>
      ))}
    </div>
  );
};
