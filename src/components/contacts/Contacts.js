import s from './Contacts.module.scss';
import ContactsImg from '../../assets/img/contactsImg.svg';


function Contacts() {
  return (
      <section className={s.contacts}>
    <div className={s.wrapper}>
      <div className={s.content}>
        <h2 className={s.titleSection}>CONTACT US</h2>
        <h3 className={s.titleText}>Ready. Set. Smile</h3>
        <p className={s.text}>Take the free online assessment to see if you are a candidate and get started on your journey.</p>
        <a href="" className={s.link}>GET HELP NOW</a>
      </div>
      <img src={ContactsImg} alt="" className={s.image} />
    </div>
      </section>
  );
}
export default Contacts;
