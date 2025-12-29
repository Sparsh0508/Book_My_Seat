import React from "react";
import mainLogo from "../../assets/main-icon-white.png";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaPinterestP, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 mt-10">
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-5 py-10 text-center">
        
        <img src={mainLogo} alt="bookMyScreen" className="mx-auto h-10 object-contain mb-2" />

        

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mt-5 text-xl">
          <a href="#" aria-label="Facebook" className="hover:text-white text-gray-300"><FaFacebookF /></a>
          <a href="#" aria-label="Instagram" className="hover:text-white text-gray-300"><FaInstagram /></a>
          <a href="#" aria-label="Twitter" className="hover:text-white text-gray-300"><FaTwitter /></a>
          <a href="#" aria-label="YouTube" className="hover:text-white text-gray-300"><FaYoutube /></a>
          <a href="#" aria-label="Pinterest" className="hover:text-white text-gray-300"><FaPinterestP /></a>
          <a href="#" aria-label="LinkedIn" className="hover:text-white text-gray-300"><FaLinkedinIn /></a>
        </div>

        <p className="text-xs text-gray-400 mt-6">
          Copyright © 2025 BookMyScreen Pvt. Ltd. All Rights Reserved.
        </p>

        <small className="text-sm max-w-2xl mx-auto leading-6 text-gray-400">
          The content and images used on this site are copyright protected and 
          copyrights vests with the respective owners. The usage of the content 
          and images on this website is intended to promote the works and no 
          endorsement of the artist shall be implied.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
