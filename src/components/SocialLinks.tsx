import { Twitter, Instagram, Linkedin, Github, Youtube, CircleDollarSign } from 'lucide-react';

const socialLinks = [
  { icon: Twitter, href: 'https://twitter.com/henrywalker' },
  { icon: CircleDollarSign, href: 'https://threads.net/henrywalker' },
  { icon: Instagram, href: 'https://instagram.com/henrywalker' },
  { icon: Linkedin, href: 'https://linkedin.com/in/henrywalker' },
  { icon: Github, href: 'https://github.com/henrywalker' },
  { icon: Youtube, href: 'https://youtube.com/@henrywalker' }
];

export default function SocialLinks() {
  return (
    <div className="social-links">
      {socialLinks.map(({ icon: Icon, href }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="social-links__item"
        >
          <Icon size={20} />
        </a>
      ))}
    </div>
  );
}