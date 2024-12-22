import { Calendar, User } from 'lucide-react';

const projects = [
  {
    title: 'Interactive Data Dashboard',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    date: 'Jan 24, 2024',
    role: 'Frontend Lead',
    tags: ['Internal Tools']
  },
  {
    title: 'Personal Finance Tracker',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    date: 'Mar 15, 2024',
    role: 'Frontend Dev',
    tags: ['Web App']
  },
  {
    title: 'Personal Finance Tracker',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    date: 'Mar 15, 2024',
    role: 'Frontend Dev',
    tags: ['Web App']
  }
];

export default function Projects() {
  return (
    <div className="projects">
      <h2 className="section__heading">Projects</h2>
      <div className="projects__grid">
        {projects.map((project) => (
          <div key={project.title} className="projects__card">
            <img src={project.image} alt={project.title} />
            <div className="projects__content">
              <h3 className="projects__title">{project.title}</h3>
              <div className="projects__meta">
                <div className="projects__meta-item">
                  <Calendar size={16} />
                  {project.date}
                </div>
                <div className="projects__meta-item">
                  <User size={16} />
                  {project.role}
                </div>
                <div className="projects__meta-item">
                {project.tags.map((tag) => (
                  <span key={tag} className="projects__tag">{tag}</span>
                ))}
              </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}