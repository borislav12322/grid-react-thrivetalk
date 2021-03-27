import s from './Footer.module.scss';


function Footer(props) {
  return (
    <div className={s.wrapper}>
        <small class={s.copyRight} >&copy;  Copyright - ThriveTalk  {props.year}</small>
    </div>
  );
}
export default Footer;
