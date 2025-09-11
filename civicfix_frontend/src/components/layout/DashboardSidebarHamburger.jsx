import React from "react";

const DashboardSidebarHamburger = ({ onClick }) => (
  <button
    className="dashboard-hamburger-icon"
    aria-label="Open menu"
    aria-controls="dashboard-mobile-drawer"
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
        background: "#2D1B69",
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
        background: "#2D1B69",
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
        background: "#2D1B69",
        borderRadius: "2px",
        transition: "all 0.3s",
      }}
    ></span>
  </button>
);

export default DashboardSidebarHamburger;
