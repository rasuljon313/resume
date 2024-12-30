import img from "../img/IMAGE 2024-12-27 22:06:45.jpg";
import img1 from "../img/2024-12-28 17.53.42.jpg";

const projects = [
  {
    title: 'Cinephie',
    image: img,
    tags: ['React', 'Sass', 'JavaScript', "TypScript", "Axios", "Use-debounce", "zustand", "tanstack/react-query"],
    description: `"Cinephie Website" - My Experience and Impressions
    The process of creating the cinema website was both exciting and educational for me. Through this project, I learned how to combine web design, front-end, and back-end technologies. I designed the website's pages using HTML, Sass, and JavaScript. To enhance user experience (UX), I used the React framework, which made the site more interactive and faster.
    The developed website allows users to search for movies and discover them with ratings and reviews. Additionally, I added search and filtering features to help users easily find the movies they are looking for.`,
    url: 'https://cinema-dusky-nine.vercel.app/',
    real: "Has not domain"
  },
  {
    title: 'Auto Zoom',
    image: img1,
    tags: ['React', 'HTML', 'Sass', 'JavaScript'],
    description: `"Auto Zoom" - My Experience and Impressions
    The process of creating the "Auto Admin" website was both challenging and highly educational. Through this project, I not only learned how to create a basic website, but I also developed an admin panel and login system. The project taught me various new technologies and tools that I can apply in future projects. I also developed a Login System where users could securely log into the website. I implemented JWT (JSON Web Tokens) for user authentication, which helped me understand how authentication and authorization work.`,
    url: 'https://login-12345.vercel.app/',
    real: "Real"
  },
  {
    title: 'Cinephie',
    image: img,
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
                <p className={`projects__status ${project.real === "Real" ? "real" : "has-not-domain"}`}>
                  {project.real}
                </p>
              </div>
              <p className="projects__description">{project.description}</p>
            </div>
            <div className="projects__meta-title">
                {project.tags.map((tag, index) => (
                  <span key={index} className="projects__tag">{tag}</span>
                ))}
              </div>
          </div>
        ))}
      </div>
    </div>
  );
}
