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
      <Link to="/" className="navbar-link" onClick={() => setDrawerOpen(false)}>
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
      <Link
        to="/auth/signin"
        className="navbar-link sign-in-button"
        onClick={() => setDrawerOpen(false)}
      >
        Sign In
      </Link>
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
          <div style={{ position: "absolute", right: 0, top: 0 }}>
            <HamburgerIcon onClick={() => setDrawerOpen(true)} />
          </div>
        )}
      </div>
      {/* Mobile Drawer */}
      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <nav style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {navLinks}
        </nav>
      </MobileDrawer>
    </nav>
  );
};

export default Navbar;
