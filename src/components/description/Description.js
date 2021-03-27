import s from './Description.module.scss';

function Description() {
  return (
    <div className={s.discriptionWrapper}>  
    <h2 className={s.title}>Why Thrive?</h2>
    <p className={s.text}> <span className={s.bold}> Want to improve your well-being from the comfort of your own couch? Are you having trouble finding the right therapist?</span> Here at ThriveTalk, our licensed therapists provide the same quality care you would get in office from anywhere you can access your laptop or mobile phone. Become your best self with ThriveTalk. Start therapy now with a licensed therapist!</p>
    <img src="#" alt=""/>
    </div>
  );
}

export default Description;
