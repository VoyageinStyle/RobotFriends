import React from "react";

const Scroll = ({ children }) => {
  return (
    <div style={{ overflow: "scroll", height: "900px", border: "5px solid black" }}>
      {children}
    </div>
  );
};

export default Scroll;
