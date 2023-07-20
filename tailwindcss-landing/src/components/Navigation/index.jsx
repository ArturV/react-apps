import React, { useState } from "react";
import { ReactComponent as ArrowDownIcon } from "../../images/icon-arrow-down.svg";
import { ReactComponent as ArrowUpIcon } from "../../images/icon-arrow-up.svg";

export const Navigation = ({ text = "", children }) => {
  const [selected, setSelected] = useState("");
  return (
    <div className="relative">
      <div className="flex space-x-4 cursor-pointer items-center">
        <span
          className="text-medium-gray hover:text-almost-black"
          onClick={() => {
            children && setSelected(text !== selected ? text : "");
          }}
        >
          {text}
        </span>
        {children && selected !== text && <ArrowDownIcon />}
        {children && selected === text && <ArrowUpIcon />}
      </div>
      {selected && children}
    </div>
  );
};