import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0F0757] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-6">
            <h2 className="text-3xl font-bold mb-2">CivicFix</h2>
            <p className="text-gray-300 mb-6">Building cleaner, safer, and reliable communities.</p>
            <div className="flex gap-4">
              <button className="bg-white text-[#0F0757] px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors">
                Call Us
              </button>
              <button className="border border-white px-6 py-2 rounded-full font-medium hover:bg-white/10 transition-colors">
                Email Us
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold uppercase mb-4">CONTACT</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Lorem ipsum</li>
              <li>+012345678900</li>
              <li>email@gmail.com</li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold uppercase mb-4">SOCIAL</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="flex items-center gap-2 hover:text-white">
                  LinkedIn ↗
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 hover:text-white">
                  Instagram ↗
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 hover:text-white">
                  WhatsApp ↗
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
