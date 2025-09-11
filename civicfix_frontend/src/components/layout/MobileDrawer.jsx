import React, { useEffect, useRef } from "react";

const MobileDrawer = ({ open, onClose, children }) => {
  const drawerRef = useRef(null);

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

  if (!open) return null;

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
          background: "#3b5ce6",
          width: "80vw",
          maxWidth: "320px",
          height: "100vh",
          boxShadow: "-2px 0 16px rgba(0,0,0,0.15)",
          padding: "2rem 1.5rem",
          display: "flex",
          flexDirection: "column",
          outline: "none",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          aria-label="Close menu"
          onClick={onClose}
          style={{
            alignSelf: "flex-end",
            background: "none",
            border: "none",
            color: "#fff",
            fontSize: "2rem",
            cursor: "pointer",
            marginBottom: "2rem",
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
