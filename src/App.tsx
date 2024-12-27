import Profile from './components/Profile';
import Skills from './components/Skills';
import Languages from './components/Languages';
import Projects from './components/Projects';
import './styles/main.scss';
import { BiLogoGithub } from 'react-icons/bi';

const App = () => {
  return (
    <div className="container">
      <div className="layout">
        <aside className="sidebar">
          <Profile />
          <Skills />
          <Languages />
        </aside>
        
        <main className="main">
          <div className="intro">
            <h2 className="section__heading">Intro</h2>
            <p className="intro__text">
            I’m Anvarov Rasuljon, a front-end developer dedicated to building interactive and accessible web experiences. I’ve developed a keen eye for detail and a strong problem-solving mindset. My primary focus is creating websites that not only look good but work seamlessly across all devices. When I’m not coding, you’ll find me experimenting with new frameworks, reading about the latest web trends, or improving my design skills.
            </p>
          </div>
          
          <Projects />
        </main>
      </div>
    </div>
  );
};

export default App;