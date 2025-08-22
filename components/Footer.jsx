import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-[#64748B] text-white rounded p-6">
      {/* Links */}
      <nav className="grid grid-flow-col gap-4 text-lg font-bold">
        <Link href={"/about"} className="link link-hover">
          About us
        </Link>
        <Link href={"/contact"} className="link link-hover">
          Contact
        </Link>
      </nav>

      {/* Social Icons */}
      <nav className="grid grid-flow-col gap-4 mt-2">
        {/* GitHub */}
        <a
          href="https://github.com/gmnayem631"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="transition-colors"
        >
          <FaGithub size={24} />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/gulam-mustafa-nayem"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="transition-colors"
        >
          <FaLinkedin size={24} />
        </a>
      </nav>

      {/* Copyright */}
      <aside className="mt-2 text-gray-200 text-sm">
        <p>
          Copyright © {new Date().getFullYear()} - All rights reserved by
          NextShop
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
