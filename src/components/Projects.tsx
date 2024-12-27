import img from "../img/IMAGE 2024-12-27 22:06:45.jpg";

const projects = [
  {
    title: 'Cinephie',
    image: img,
    date: 'Jan 24, 2024',
    role: 'Frontend Lead',
    tags: ['React', 'Sass', 'JavaScript', "Axios", "Use-debounce", "zustand", "tanstack/react-query"],
    description: `"Cinephie Website" - My Experience and Impressions
    The process of creating the cinema website was both exciting and educational for me. Through this project, I learned how to combine web design, front-end, and back-end technologies. I designed the website's pages using HTML, CSS, and JavaScript. To enhance user experience (UX), I used the React framework, which made the site more interactive and faster.
  
    The developed website allows users to search for movies and discover them with ratings and reviews. Additionally, I added search and filtering features to help users easily find the movies they are looking for.`,
    url: 'https://example.com/project1',
    real: "Has not domain"
  },
  {
    title: 'Cinephie',
    image: img,
    date: 'Jan 24, 2024',
    role: 'Frontend Lead',
    tags: ['React', 'HTML', 'CSS', 'JavaScript'],
    description: `"Cinema Website" - My Experience and Impressions
    The process of creating the cinema website was both exciting and educational for me. Through this project, I learned how to combine web design, front-end, and back-end technologies. I designed the website's pages using HTML, CSS, and JavaScript. To enhance user experience (UX), I used the React framework, which made the site more interactive and faster.
  
    The developed website allows users to search for movies and discover them with ratings and reviews. Additionally, I added search and filtering features to help users easily find the movies they are looking for.`,
    url: 'https://example.com/project2',
    real: "Has not domain"
  },
  {
    title: 'Cinephie',
    image: img,
    date: 'Jan 24, 2024',
    role: 'Frontend Lead',
    tags: ['React', 'HTML', 'CSS', 'JavaScript'],
    description: `"Cinema Website" - My Experience and Impressions
    The process of creating the cinema website was both exciting and educational for me. Through this project, I learned how to combine web design, front-end, and back-end technologies. I designed the website's pages using HTML, CSS, and JavaScript. To enhance user experience (UX), I used the React framework, which made the site more interactive and faster.
  
    The developed website allows users to search for movies and discover them with ratings and reviews. Additionally, I added search and filtering features to help users easily find the movies they are looking for.`,
    url: 'https://example.com/project3',
    real: "Has not domain"
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
              <div className="projects__content__box">
                <h3 className="projects__title">{project.title}</h3>
                <p>{project.real}</p> {/* Fixed: Using 'project.real' instead of 'projects.real' */}
              </div>
              <p className="projects__description">{project.description}</p>
              <div className="projects__meta-title">
                {project.tags.map((tag, index) => (
                  <span key={index} className="projects__tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
