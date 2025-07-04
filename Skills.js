import React from 'react';
import './Skills.css';

export default function Skills() {
  const skills = ['Java', 'Python', 'MongoDB', 'YOLOv8', 'NodeJs','C','C++','HTML','ReactJS','JavaScript'];

  return React.createElement(
    'section',
    { id: 'skills', className: 'skills' },
    [
      React.createElement('h2', { key: 'title' }, 'Tech Stack'),
      React.createElement(
        'ul',
        { key: 'list', className: 'skill-list' },
        skills.map(skill =>
          React.createElement(
            'li',
            { key: skill, className: 'skill-item' },
            skill
          )
        )
      )
    ]
  );
}
