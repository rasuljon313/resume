const skills = [
  'Html', 'Css (Tailwind, Sass, Scss)', 'JavaScript', 'TypeScript', 'React', 'Redux', 'Git',
  'Api'
];

export default function Skills() {
  return (
    <div className="skills">
      <h2 className="section__heading">Skills</h2>
      <div className="skills__list">
        {skills.map((skill) => (
          <span key={skill} className="skills__item">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}