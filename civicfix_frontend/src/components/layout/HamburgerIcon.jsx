import React from "react";

const HamburgerIcon = ({ onClick }) => (
  <button
    className="hamburger-icon"
    aria-label="Open menu"
    aria-controls="mobile-drawer"
    aria-expanded="false"
    onClick={onClick}
    style={{
      background: "none",
      border: "none",
      padding: 0,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "40px",
      height: "40px",
    }}
  >
    <span
      style={{
        display: "block",
        width: "28px",
        height: "3px",
        background: "#fff",
        borderRadius: "2px",
        marginBottom: "6px",
        transition: "all 0.3s",
      }}
    ></span>
    <span
      style={{
        display: "block",
        width: "28px",
        height: "3px",
        background: "#fff",
        borderRadius: "2px",
        marginBottom: "6px",
        transition: "all 0.3s",
        color: "white",
      }}
    ></span>
    <span
      style={{
        display: "block",
        width: "28px",
        height: "3px",
        background: "#fff",
        borderRadius: "2px",
        transition: "all 0.3s",
        color: "white",
      }}
    ></span>
  </button>
);

export default HamburgerIcon;
