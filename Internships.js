import React from 'react';
import './Internships.css';
import { FaLaptopCode, FaRobot } from 'react-icons/fa';

export default function Internships() {
  return React.createElement(
    'section',
    { id: 'internships', className: 'internships' },
    [
      React.createElement('h2', { key: 'title' }, '💼 Internships'),

      React.createElement(
        'div',
        { key: 'items', className: 'internship-list' },
        [
          React.createElement(
            'div',
            { key: 'intern1', className: 'internship-card' },
            [
              React.createElement(FaLaptopCode, { key: 'icon1', className: 'internship-icon' }),
              React.createElement('h3', { key: 'role1' }, 'Java Intern'),
              React.createElement('p', { key: 'org1' }, 'InternPe'),
            ]
          ),
          React.createElement(
            'div',
            { key: 'intern2', className: 'internship-card' },
            [
              React.createElement(FaRobot, { key: 'icon2', className: 'internship-icon' }),
              React.createElement('h3', { key: 'role2' }, 'AI/ML Intern'),
              React.createElement('p', { key: 'org2' }, 'CubeAI Solutions (5 months)'),
              React.createElement('p', { key: 'desc2' }, 'Worked on real-time Computer Vision projects using YOLO, OpenCV, and Python'),
            ]
          ),
        ]
      )
    ]
  );
}
