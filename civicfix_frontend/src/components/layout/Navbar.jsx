import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../../styles/navbar.css";
import HamburgerIcon from "./HamburgerIcon";
import MobileDrawer from "./MobileDrawer";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const navLinks = (
    <>
      <div className="navbar-regular-links">
        <Link
          to="/"
          className="navbar-link"
          onClick={() => setDrawerOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/about"
          className="navbar-link"
          onClick={() => setDrawerOpen(false)}
        >
          About
        </Link>
        <Link
          to="/features"
          className="navbar-link"
          onClick={() => setDrawerOpen(false)}
        >
          Features
        </Link>
        <Link
          to="/how-to-use"
          className="navbar-link"
          onClick={() => setDrawerOpen(false)}
        >
          How to use
        </Link>
      </div>
      <div className="navbar-action-links">
        <Link
          to="/emergency"
          className="emergency-button"
          onClick={() => setDrawerOpen(false)}
          style={{
            backgroundColor: "#ff3b30",
            color: "white",
            padding: "8px 16px",
            borderRadius: "20px",
            fontWeight: "600",
            display: "flex",
            alignItems: "center",
            marginRight: "10px",
            transition: "all 0.2s ease",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#e02d21")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#ff3b30")
          }
        >
          <span style={{ marginRight: "4px" }}></span> Emergency?
        </Link>
        <Link
          to="/auth/signin"
          className="navbar-link sign-in-button"
          onClick={() => setDrawerOpen(false)}
        >
          Sign In
        </Link>
      </div>
    </>
  );

  return (
    <nav className="navbar">
      <div
        className="container navbar-content"
        style={{ position: "relative" }}
      >
        <Link to="/" className="navbar-brand">
          CivicFix
        </Link>

        {/* Desktop links */}
        <div
          className="navbar-links"
          style={{ display: isMobile ? "none" : "flex" }}
        >
          {navLinks}
        </div>

        {/* Hamburger for mobile */}
        {isMobile && (
          <div style={{ position: "absolute", right: 10, top: 5 }}>
            <HamburgerIcon onClick={() => setDrawerOpen(true)} />
          </div>
        )}
      </div>
      {/* Mobile Drawer */}
      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <nav
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            width: "100%",
          }}
        >
          <Link
            to="/"
            className="navbar-brand"
            style={{ color: "white", fontSize: "1.8rem", marginBottom: "1rem" }}
          >
            CivicFix
          </Link>
          {navLinks}
        </nav>
      </MobileDrawer>
    </nav>
  );
};

export default Navbar;
