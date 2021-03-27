import s from './Contacts.module.scss';


function Contacts() {
  return (
    <div className={s.wrapper}>
        <h2 className={s.titleSection}>CONTACT US</h2>
        <h3 className={s.titleText}>Ready. Set. Smile</h3>
        <p className={s.text}>Take the free online assessment to see if you are a candidate and get started on your journey.</p>
        <a href="" className={s.link}>GET HELP NOW</a>
        <img src="" alt="" className={s.image}/>
    </div>
  );
}
export default Contacts;
