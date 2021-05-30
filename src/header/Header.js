import Logo from '../components/logo/Logo';
import Button from '../components/button/Button';
import s from './Header.module.scss';
import HeaderImg from '../assets/img/headerImg.svg';
import HeaderBackground from '../assets/img/headerBackground.svg';

function Header() {
  return (
    <header className={s.header}>
      <div className={s.top}>
        <Logo />
        <ul className={s.menuNavList}>
          <li className={s.menuItem}>
            <a href="#" className={s.menuLink}>Home</a>
          </li>
          <li className={s.menuItem}>
            <a href="#" className={s.menuLink}>About</a>
          </li>
          <li className={s.menuItem}>
            <a href="#" className={s.menuLink}>Services</a>
          </li>
          <li className={s.menuItem}>
            <a href="#" className={s.menuLink}>Blog</a>
          </li>
        </ul>
        <Button btnValue="CONTACT US" />
      </div>
      <div className={s.imgs}>
        <img src={HeaderImg} alt="" className={s.img} />
        <img src={HeaderBackground} alt="" className={s.background} />
      </div>
      <div className={s.content}>
        <Logo logoStyle= {{maxWidth: '484px',
      width: '100%', minHeight:'64px', height: '100%' }}/>
        <h2 className={s.title}>HELPING YOU THRIVE IN ALL AREAS OF LIFE</h2>

        <p className={s.text}>Our highly talented therapists can help you with a range of issues including relationships, sex, PTSD, depression, social anxiety, or even just caring for yourself more.</p>
        <div className={s.btns}>
          <Button btnValue="WHO AM I" />
          <Button btnValue="WHAT DO I DO" />
        </div>

      </div>

    </header>
  );
}

export default Header;
