import React from "react";

const HamburgerIcon = ({ onClick }) => (
  <button
    className="hamburger-icon"
    aria-label="Open menu"
    aria-controls="mobile-drawer"
    aria-expanded="false"
    onClick={onClick}
    style={{
      background: "#0925ba",
      border: "none",
      padding: "6px",
      cursor: "pointer",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "40px",
      height: "40px",
      borderRadius: "8px",
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    }}
  >
    <span
      style={{
        display: "block",
        width: "24px",
        height: "2px",
        background: "#fff",
        borderRadius: "2px",
        marginBottom: "5px",
        transition: "all 0.3s",
      }}
    ></span>
    <span
      style={{
        display: "block",
        width: "24px",
        height: "2px",
        background: "#fff",
        borderRadius: "2px",
        marginBottom: "5px",
        transition: "all 0.3s",
      }}
    ></span>
    <span
      style={{
        display: "block",
        width: "24px",
        height: "2px",
        background: "#fff",
        borderRadius: "2px",
        transition: "all 0.3s",
      }}
    ></span>
  </button>
);

export default HamburgerIcon;
