import s from './MoreInfo.module.scss';
import sectionImg from '../../assets/img/moreInfoImg.svg';


function MoreInfo() {
  return (
    <div className={s.wrapper}>
      <img src={sectionImg} alt="" className={s.image} />
      <div className={s.content}>
        <h2 className={s.title}>YOU SHOULD ALSO KNOW</h2>
        <p className={s.text}>MDD affects more than 16.1 million American adults, or about 6.7%of the U.S. population age 18 and older in a given year. We at ThriveTalk can help you.</p>
        <a href="#" className={s.link}>GET HELP NOW</a>
      </div>
    </div>
  );
}
export default MoreInfo;
