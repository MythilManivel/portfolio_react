import React from 'react';
import './Achievements.css';

export default function Achievements() {
  const achievements = [
    '🏅 Best Student Award – Dept. of IT (2023‑24) – Chosen from 120 students',
    '🎤 Event Ambassador – Technical Symposium @ CIT',
    '🎓 Top 5 % Merit Scholarship (2023‑25) – KVIT Trust, KEC',
    '🥇 1st Prize – Paper Presentation @ CIT: “AI in Agriculture”',
    '🥈 2nd Place – Project @ SKCET: “Image‑Embedded Caesar Cipher Encryptor”',
    '🥉 3rd Place – Hackathon @ CIT: “MediBot – Smart AI Assistant”',
    '🏆 Top 8 Finalist – KPR Hackathon',
  ];

  return React.createElement(
    'section',
    { id: 'achievements', className: 'achievements' },
    [
      React.createElement('h2', { key: 'title' }, 'Achievements'),
      React.createElement(
        'ul',
        { key: 'timeline', className: 'timeline' },
        achievements.map((item, i) =>
          React.createElement(
            'li',
            { key: i, className: 'timeline-item' },
            item
          )
        )
      ),
    ]
  );
}
