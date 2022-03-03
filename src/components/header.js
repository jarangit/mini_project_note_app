import React from "react";

const Header = ({ handleToggleDarkNode }) => {
  return (
    <div className="header">
      <h1>NOTES</h1>
      <button
        className="save"
        onClick={() => handleToggleDarkNode((prev) => !prev)}
      >
        Toogle Dark
      </button>
    </div>
  );
};

export default Header;
