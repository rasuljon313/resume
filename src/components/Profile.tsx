import { Mail, Phone, BadgeCheck } from 'lucide-react';
import { BiLogoGithub } from 'react-icons/bi';
import { CiUser } from 'react-icons/ci';
import { LiaTelegramPlane } from 'react-icons/lia';
import { RxVercelLogo } from 'react-icons/rx';

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
           <h3 className='profile__section__heading__box__name'>Proweb IT School</h3>
             <p className='profile__section__heading__box__title'>Frontend Development Course</p>
             <p className='profile__section__heading__box__txt'>Duration: 10 months</p>
        </div>
        <div className="profile__section">
          <h2 className="section__heading">Contact</h2>
          <div className="profile__contact">
          <a href="https://github.com/rasuljon313" target="_blank" rel="noopener noreferrer">
              <BiLogoGithub size={20} style={{ maxWidth: '20px', width: '100%' }} />
              Git Hub
             </a>
            <a href="mailto:anvarovrasuljon78@gmail.com">
              <Mail size={16} style={{ maxWidth: '20px', width: '100%' }}/>
              My Gmail
            </a>
            <a href="https://vercel.com/rasuljon313s-projects" target="_blank" rel="noopener noreferrer">
              <RxVercelLogo size={20} style={{ maxWidth: '20px', width: '100%' }}/>
              MY Vercel
            </a>
            <a href="https://t.me/rasuljon_234" target="_blank" rel="noopener noreferrer">
              <LiaTelegramPlane size={16} style={{ maxWidth: '20px', width: '100%' }}/>
              My Telegram
            </a>
            <div>
            <a href="tel:+998770308082">
              <Phone size={16} style={{ maxWidth: '20px', width: '100%' }}/>
              +998 77 030 80 82
            </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}