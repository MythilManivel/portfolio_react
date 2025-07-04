import React from 'react';
import './Publications.css';

export default function Publications() {
  return React.createElement(
    'section',
    { id: 'publications', className: 'publications' },
    [
      React.createElement('h2', { key: 'title' }, '📚 Publications'),
      React.createElement('ul', { key: 'list' }, [
        React.createElement(
          'li',
          { key: 'pub1' },
          '“Smart Hospital – Emerging Technology” (2023) – Cited by 3 research papers'
        ),
        React.createElement(
          'li',
          { key: 'pub2' },
          '“Scalability Challenges in AGI Development” (2024) – Featured in international publication'
        ),
      ])
    ]
  );
}
