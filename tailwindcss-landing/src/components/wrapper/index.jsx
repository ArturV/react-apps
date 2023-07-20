import React from "react";

export const Wrapper = ({ children }) => {
  return (
    <div className="container mx-auto py-8 px-3 min-h-screen">{children}</div>
  );
};
