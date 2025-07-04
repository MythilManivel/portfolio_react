import React from 'react';
import './Footer.css';
import { MdEmail, MdPhone } from 'react-icons/md';
import { FaLinkedin, FaGithub, FaCode } from 'react-icons/fa';

export default function Footer() {
  const links = [
    {
      href: 'mailto:m.mythili23manivel@gmail.com',
      icon: <MdEmail />,
      label: 'Email',
    },
    {
      href: 'https://www.linkedin.com/in/mythili-manivel-72779631b',
      icon: <FaLinkedin />,
      label: 'LinkedIn',
    },
    {
      href: 'https://github.com/MythilManivel',
      icon: <FaGithub />,
      label: 'GitHub',
    },
    {
      href: 'https://leetcode.com/u/Mythili23manivel/',
      icon: <FaCode />,
      label: 'LeetCode',
    },
    {
      href: 'tel:+919025930150',
      icon: <MdPhone />,
      label: 'Phone',
    },
  ];

  return (
    <footer id="footer" className="footer"> {/* 👈 Added id for smooth scroll */}
      <div className="footer-inner">
        <small>© {new Date().getFullYear()} Mythili Manivel · All rights reserved</small>

        <ul className="footer-links">
          {links.map(link => (
            <li key={link.label}>
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                {link.icon} <span>{link.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
