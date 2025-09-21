import React, { useEffect, useRef } from "react";

const MobileDrawer = ({ open, onClose, children }) => {
  const drawerRef = useRef(null);
  const [isVisible, setIsVisible] = React.useState(false);

  // Handle visibility for animations
  React.useEffect(() => {
    if (open) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [open]);

  // Focus trap
  useEffect(() => {
    if (open && drawerRef.current) {
      drawerRef.current.focus();
    }
  }, [open]);

  // Close on ESC
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  if (!isVisible) return null;

  return (
    <div
      className="mobile-drawer-overlay"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.4)",
        zIndex: 100,
        display: "flex",
        justifyContent: "flex-end",
        opacity: open ? 1 : 0,
        transition: "opacity 0.3s ease",
      }}
      onClick={onClose}
      tabIndex={-1}
      aria-modal="true"
      role="dialog"
    >
      <aside
        ref={drawerRef}
        id="mobile-drawer"
        tabIndex={0}
        style={{
          background: "#0925ba",
          width: "80vw",
          maxWidth: "320px",
          height: "100vh",
          boxShadow: "-2px 0 16px rgba(0,0,0,0.15)",
          padding: "2rem 1.5rem",
          display: "flex",
          flexDirection: "column",
          outline: "none",
          borderTopLeftRadius: "20px",
          borderBottomLeftRadius: "20px",
          transform: open ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s ease-in-out",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          aria-label="Close menu"
          onClick={onClose}
          style={{
            alignSelf: "flex-end",
            background: "rgba(255, 255, 255, 0.2)",
            border: "none",
            color: "#fff",
            fontSize: "1.5rem",
            cursor: "pointer",
            marginBottom: "1.5rem",
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 0,
            fontWeight: "bold",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            transition: "all 0.2s ease",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = "rgba(255, 255, 255, 0.3)";
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          ×
        </button>
        {children}
      </aside>
    </div>
  );
};

export default MobileDrawer;
