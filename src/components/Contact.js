import React from 'react';
import './Contact.css';
import { MdEmail, MdPhone } from 'react-icons/md';
import { FaLinkedin, FaGithub, FaCode } from 'react-icons/fa';

export default function Contact() {
  const links = [
    {
      label: 'Email',
      href: 'mailto:m.mythili23manivel@gmail.com',
      text: 'm.mythili23manivel@gmail.com',
      icon: <MdEmail />,
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/mythili-manivel-72779631b',
      text: 'linkedin.com/in/mythili-manivel-72779631b',
      icon: <FaLinkedin />,
    },
    {
      label: 'GitHub',
      href: 'https://github.com/MythilManivel',
      text: 'github.com/MythilManivel',
      icon: <FaGithub />,
    },
    {
      label: 'LeetCode',
      href: 'https://leetcode.com/u/Mythili23manivel/',
      text: 'leetcode.com/u/Mythili23manivel',
      icon: <FaCode />,
    },
    {
      label: 'Phone',
      href: 'tel:+919025930150',
      text: '+91 90259 30150',
      icon: <MdPhone />,
    },
  ];

  return React.createElement(
    'section',
    { id: 'contact', className: 'contact' },
    [
      React.createElement('h2', { key: 'title' }, 'Contact Me'),
      React.createElement(
        'ul',
        { key: 'list', className: 'contact-list' },
        links.map(item =>
          React.createElement(
            'li',
            { key: item.label, className: 'contact-item' },
            React.createElement(
              'a',
              { href: item.href, target: '_blank', rel: 'noopener noreferrer' },
              [item.icon, ' ', item.text]
            )
          )
        )
      ),
    ]
  );
}
