import s from './Footer.module.scss';


function Footer(props) {
  return (
      <footer className={s.footer}>
    <div className={s.wrapper}>
        <small className={s.copyRight} >&copy;  Copyright - ThriveTalk  {props.year}</small>
    </div>
      </footer>
  );
}
export default Footer;
