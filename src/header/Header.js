import Logo from '../components/logo/Logo';
import MenuNav from '../components/menuNav/MenuNav';
import Button from '../components/button/Button';
import s from './Header.module.scss';

function Header() {
  return (
    <header className={s.header}>
        <div className={s.top}>
            <Logo logoValue="Thrivetalk" />
            <MenuNav/>
            <Button btnValue="CONTACT US" />
        </div>

        <div className={s.content}>
          <Logo/>
          <h2 className={s.title}>HELPING YOU THRIVE IN ALL AREAS OF LIFE</h2>
        </div>
        <p className={s.text}>Our highly talented therapists can help you with a range of issues including relationships, sex, PTSD, depression, social anxiety, or even just caring for yourself more.</p>
        <div className={s.btns}>
        <Button btnValue="WHO AM I" />
        <Button btnValue="WHAT DO I DO" />
        </div>
    </header>
  );
}

export default Header;
