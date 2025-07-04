import React from 'react';
import Header        from './components/Header';
import Content       from './components/Content';
import Skills        from './components/Skills';
import List          from './components/List';
import Achievements  from './components/Achievements';
import Certification from './components/Certification';
import Publications  from './components/Publications';
import Internships   from './components/Internships';
import Footer        from './components/Footer';

export default function App() {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(Header),

    React.createElement('main', null, [
      React.createElement(Content,       { key: 'content' }),
      React.createElement(Skills,        { key: 'skills' }),
      React.createElement(List,          { key: 'projects' }),
      React.createElement(Achievements,  { key: 'achievements' }),

      React.createElement(Internships,   { key: 'internships' }),
      React.createElement(Certification, { key: 'certification' }),
      React.createElement(Publications,  { key: 'publications' }),
      /*  👇  Contact component removed to avoid duplication  */
    ]),

    React.createElement(Footer)
  );
}
