import React from 'react';
import projects from '../data/projects';
import './List.css';

export default function List() {
  return (
    <section id="projects" className="list">
      <h2>My Projects</h2>

      <div className="cards">
        {projects.map(p => (
          /* ▼—‑‑‑‑‑‑ replace your old <article>… here */
          <article key={p.id} className="card">
            <h3>{p.name}</h3>
            <p>{p.description}</p>
          </article>
          /* ▲—‑‑‑‑‑‑ just those three lines */
        ))}
      </div>
    </section>
  );
}
