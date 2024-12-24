import { Mail, Globe, Phone, BadgeCheck } from 'lucide-react';
import { CiUser } from 'react-icons/ci';

export default function Profile() {
  return (
    <div className="profile">
      <div className="profile__header">
      <CiUser className='profile__svg' />
        <div className="profile__info">
          <div className="profile__title">
            <h1>Anvarov Rasuljon</h1>
            <BadgeCheck className="profile__badge" size={24} />
          </div>
        </div>
      </div>

      <div className="profile__content">
        <div className="profile__section">
          <h2 className="section__heading">About</h2>
          <div className='profile__content__box'>
            <p className='profile__content__box__txt' >Dedicated frontend developer with a strong foundation in HTML, CSS, and JavaScript, gained through completing a 10-month program at Proweb IT School. Passionate about creating responsive and user-friendly websites. Eager to bring technical skills and creativity to a dynamic team.</p>
          </div>
        </div>

        <div className="profile__section">
          <h2 className="section__heading">Education</h2>
           <h3>Proweb IT School</h3>
             <p className='section__heading__box__title'>Frontend Development Course</p>
             <p className='section__heading__box__txt'>Duration: 10 months</p>
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