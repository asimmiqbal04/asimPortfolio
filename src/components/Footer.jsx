import React from "react";
import { FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";
import { SiUpwork } from "react-icons/si";
const Footer = () => {
  return (
    <footer className="w-full py-4 bg-black-100/55 text-white flex justify-center gap-6">
      <a
        href="https://www.upwork.com/freelancers/~01257f2c4f5ce0c5e1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiUpwork size={24} />
      </a>

      <a
        href="https://github.com/asimmiqbal04"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/asim-iqbal-213a0037b/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={24} />
      </a>
    </footer>
  );
};

export default Footer;