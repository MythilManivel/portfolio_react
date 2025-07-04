import React from 'react';
import './Content.css';

export default function Content() {
  return React.createElement(
    'section',
    { id: 'about', className: 'content' },
    React.createElement(
      'div',
      { className: 'about-container' },  // wrapper for all inner content
      [
        React.createElement('h2', { key: 'title' }, 'Hello, I’m Mythili 👋'),
        React.createElement(
  'p',
  { key: 'desc' },
  'Pre-final year B.Tech IT student at Kongu Engineering College • AI/ML intern @ CubeAI Solutions • Hackathon winner @ CIT | Prize-winner & presenter at SKCET & CIT | AWS Certified • Passionate about computer vision, full-stack development, and hackathons.'
),
        React.createElement(
          'a',
          {
            key: 'btn',
            className: 'cta-btn',
            href: '/Mythili_CV.pdf',
            download: true,
          },
          'Download CV'
        ),
      ]
    )
  );
}
