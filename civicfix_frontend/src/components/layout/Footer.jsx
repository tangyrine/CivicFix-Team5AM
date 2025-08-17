import React from "react";
import "../../styles/navbar.css"; // small reuse of layout styles if present

const Footer = () => {
	return (
		<footer className="site-footer" style={{ backgroundColor: '#0f172a', color: '#cbd5e1', padding: '2rem 0' }}>
			<div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1rem', textAlign: 'center' }}>
				<h4 style={{ color: '#fff', marginBottom: '0.5rem' }}>CivicFix</h4>
				<p style={{ margin: 0 }}>Making communities better, one report at a time.</p>
				<small style={{ display: 'block', marginTop: '0.75rem', color: '#94a3b8' }}>© {new Date().getFullYear()} CivicFix</small>
			</div>
		</footer>
	);
};

export default Footer;
