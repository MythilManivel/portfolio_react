import React from 'react';
import './Certification.css';

export default function Certification() {
  return React.createElement(
    'section',
    { id: 'certification', className: 'certification' },
    [
      React.createElement('h2', { key: 'title' }, 'Certification'),
      React.createElement(
        'p',
        { key: 'text' },
        '✅ AWS Cloud Practitioner Global Certification (2024)'
      ),
    ]
  );
}
