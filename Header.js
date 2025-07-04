import React from 'react';
import './Header.css';

export default function Header() {
  const links = ['About', 'Skills', 'Achievements', 'Projects', 'Contact'];

  return (
    <header className="header">
      <h1 className="logo">My Portfolio</h1>

      <nav>
        <ul className="nav-links">
          {links.map(item => (
            <li key={item}>
              <a href={item === 'Contact' ? '#footer' : '#' + item.toLowerCase()}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
