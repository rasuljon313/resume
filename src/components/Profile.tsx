import { Mail, Globe, Phone, BadgeCheck } from 'lucide-react';

export default function Profile() {
  return (
    <div className="profile">
      <div className="profile__header">
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
          alt="Profile"
          className="profile__image"
        />
        <div className="profile__info">
          <div className="profile__title">
            <h1>Henry Walker</h1>
            <BadgeCheck className="profile__badge" size={24} />
          </div>
        </div>
      </div>

      <div className="profile__content">
        <div className="profile__section">
          <h2 className="section__heading">About</h2>
          <p>Brooklyn based full-stack software engineer with 7+ years of experience in building web and mobile apps.</p>
        </div>

        <div className="profile__section">
          <h2 className="section__heading">Contact</h2>
          <div className="profile__contact">
            <a href="mailto:hey@henrywalker.com">
              <Mail size={16} />
              hey@henrywalker.com
            </a>
            <a href="https://henrywalker.com">
              <Globe size={16} />
              henrywalker.com
            </a>
            <div>
              <Phone size={16} />
              555-1234-5678
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}