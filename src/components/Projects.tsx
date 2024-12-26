// import { Calendar, User } from 'lucide-react';

// const projects = [
//   {
//     title: 'Interactive Data Dashboard',
//     image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//     date: 'Jan 24, 2024',
//     role: 'Frontend Lead',
//     tags: ['Internal Tools']
//   },
//   {
//     title: 'Personal Finance Tracker',
//     image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//     date: 'Mar 15, 2024',
//     role: 'Frontend Dev',
//     tags: ['Web App']
//   },
//   {
//     title: 'Personal Finance Tracker',
//     image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//     date: 'Mar 15, 2024',
//     role: 'Frontend Dev',
//     tags: ['Web App']
//   }
// ];

// export default function Projects() {
//   return (
//     <div className="projects">
//       <h2 className="section__heading">Projects</h2>
//       <div className="projects__grid">
//         {projects.map((project) => (
//           <div key={project.title} className="projects__card">
//             <a href="">
//             <img src={project.image} alt={project.title} />
//             </a>
//             <div className="projects__content">
//               <h3 className="projects__title">{project.title}</h3>
//               <div className="projects__meta">
//                 <div className="projects__meta-item">
//                   <Calendar size={16} />
//                   {project.date}
//                 </div>
//                 <div className="projects__meta-item">
//                   <User size={16} />
//                   {project.role}
//                 </div>
//                 <div className="projects__meta-item">
//                 {project.tags.map((tag) => (
//                   <span key={tag} className="projects__tag">{tag}</span>
//                 ))}
//               </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



import { Calendar, User } from 'lucide-react';

const projects = [
  {
    title: 'Cinephie',
    image: '',
    date: 'Jan 24, 2024',
    role: 'Frontend Lead',
    tags: ['Internal Tools'],
    url: 'https://example.com/project1' // Loyihaga havola
  },
  {
    title: 'Personal Finance Tracker',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    date: 'Mar 15, 2024',
    role: 'Frontend Dev',
    tags: ['Web App'],
    url: 'https://example.com/project2' // Loyihaga havola
  },
  {
    title: 'Personal Finance Tracker',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    date: 'Mar 15, 2024',
    role: 'Frontend Dev',
    tags: ['Web App'],
    url: 'https://example.com/project3' // Loyihaga havola
  }
];

export default function Projects() {
  return (
    <div className="projects">
      <h2 className="section__heading">Projects</h2>
      <div className="projects__grid">
        {projects.map((project) => (
          <div key={project.title} className="projects__card">
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.title} />
            </a>
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
