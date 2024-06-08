import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const F = () => {
  return (
    <div>
      <footer className="w-full bg-cyan-800 text-white p-6 mt-auto text-center">
        {/* Social links section */}
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://example.com/facebook" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
            <FaFacebookF className="w-8 h-8" />
          </a>
          <a href="https://example.com/twitter" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
            <FaTwitter className="w-8 h-8" />
          </a>
          <a href="https://example.com/instagram" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
            <FaInstagram className="w-8 h-8" />
          </a>
          <a href="https://example.com/linkedin" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
            <FaLinkedinIn className="w-8 h-8" />
          </a>
          {/* Add more social media icons and links as needed */}
        </div>
        <p className="text-sm">Connect with us on social media</p>
        <p className="text-sm mt-2">© [Your Name] 2024. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default F;
