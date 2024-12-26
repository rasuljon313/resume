import Profile from './components/Profile';
import Skills from './components/Skills';
import Languages from './components/Languages';
import Projects from './components/Projects';
import './styles/main.scss';

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
              I'm Henry Walker, a product engineer from Brooklyn, New York City. My expertise lies in developing innovative and user-focused products for both web and mobile platforms, where I emphasize intuitive design and robust functionality.
            </p>
            <p className="intro__text">
              Holding a Master's degree in Computer Science from the Nova University of Science and Technology, my journey began in a dynamic startup, progressing to lead positions in established tech firms.
            </p>
          </div>
          
          <Projects />
        </main>
      </div>
    </div>
  );
};

export default App;