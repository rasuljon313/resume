const languages = [
  { name: 'English', flag: '🇬🇧' },
  { name: 'Uzbek', flag: '🇺🇿' }
];

export default function Languages() {
  return (
    <div className="languages">
      <h2 className="section__heading">Languages</h2>
      <div className="languages__list">
        {languages.map((lang) => (
          <div key={lang.name} className="languages__item">
            <span>{lang.flag}</span>
            <span>{lang.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}