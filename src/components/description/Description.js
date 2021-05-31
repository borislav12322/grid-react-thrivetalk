import s from './Description.module.scss';
import AboutWoman from '../../assets/img/womanAbout.svg';

function Description() {
  return (
    <div className={s.descriptionWrapper}>
      <div className={s.content}>
        <h2 className={s.title}>Why Thrive?</h2>
        <p className={s.text}>  Want to improve your well-being from the comfort of your own couch? Are you having trouble finding the right therapist? Here at ThriveTalk, our licensed therapists provide the same quality care you would get in office from anywhere you can access your laptop or mobile phone. Become your best self with ThriveTalk. Start therapy now with a licensed therapist!</p>
      </div>
      <div className={s.imgWrapper}>
        <img className={s.img} src={AboutWoman} alt="woman"/>
      </div>
    </div>
  );
}

export default Description;
