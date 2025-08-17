import React from "react";
import "../../styles/navbar.css"; // small reuse of layout styles if present

const Footer = () => {
  return (
    <footer
      className="site-footer"
      style={{
        backgroundColor: "#1e1b4b", // Dark blue/purple background
        color: "#ffffff",
        padding: "3rem 2rem",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "2rem",
          flexWrap: "wrap",
        }}
      >
        {/* Left Section */}
        <div style={{ flex: "1", minWidth: "300px" }}>
          <h2
            style={{
              color: "#fff",
              marginBottom: "1rem",
              fontSize: "2rem",
              fontWeight: "bold",
            }}
          >
            CivicFix
          </h2>
          <p
            style={{
              margin: "0 0 2rem 0",
              fontSize: "1.1rem",
              lineHeight: "1.5",
            }}
          >
            Building cleaner, safer, and reliable communities.
          </p>

          {/* Action Buttons */}
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <button
              style={{
                backgroundColor: "#ffffff",
                color: "#1e1b4b",
                border: "none",
                padding: "0.75rem 2rem",
                borderRadius: "25px",
                fontWeight: "500",
                cursor: "pointer",
                fontSize: "1rem",
              }}
              onClick={() => (window.location.href = "tel:+919234567890")}
            >
              Call Us
            </button>
            <button
              style={{
                backgroundColor: "#ffffff",
                color: "#1e1b4b",
                border: "none",
                padding: "0.75rem 2rem",
                borderRadius: "25px",
                fontWeight: "500",
                cursor: "pointer",
                fontSize: "1rem",
              }}
              onClick={() => (window.location.href = "mailto:email@gmail.com")}
            >
              Email Us
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div
          style={{
            display: "flex",
            gap: "4rem",
            flexWrap: "wrap",
            minWidth: "300px",
          }}
        >
          {/* Contact Column */}
          <div>
            <h3
              style={{
                color: "#fff",
                marginBottom: "1.5rem",
                fontSize: "1.1rem",
                fontWeight: "600",
                letterSpacing: "0.05em",
              }}
            >
              CONTACT
            </h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                fontSize: "0.95rem",
              }}
            >
              <p style={{ margin: 0, lineHeight: "1.4" }}>Lorem Ipsum</p>
              <p style={{ margin: 0, lineHeight: "1.4" }}>+919234567890</p>
              <p style={{ margin: 0, lineHeight: "1.4" }}>email@gmail.com</p>
            </div>
          </div>

          {/* Social Column */}
          <div>
            <h3
              style={{
                color: "#fff",
                marginBottom: "1.5rem",
                fontSize: "1.1rem",
                fontWeight: "600",
                letterSpacing: "0.05em",
              }}
            >
              SOCIAL
            </h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                fontSize: "0.95rem",
              }}
            >
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#ffffff",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                LinkedIn ↗
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#ffffff",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                Instagram ↗
              </a>
              <a
                href="https://whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#ffffff",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                Whatsapp ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
