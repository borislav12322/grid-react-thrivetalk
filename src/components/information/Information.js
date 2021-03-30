import s from './Information.module.scss';
import InfoTitle from './infoTitle/InfoTitle';
import InfoImg from '../../assets/img/infoImg.svg';

function Information() {
    return (
        <div className={s.wrapper}>
            <img src={InfoImg} alt="" className={s.image} />
            <div className={s.content}>
                <div className={s.someInfo}>
                    <InfoTitle titleText="SOME INFO" />
                    <p className={s.textInfo} >Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula.</p>
                </div>

                <div className={s.phoneNumber}>
                    <InfoTitle titleText='ENFOLD HEALTH' />
                    <p className={s.phoneNumberText}>Main Street 1, Olcott Buffalo, United States</p>
                    <p className={s.number}>+555 283 784 333</p>
                    <a href="" className={s.emailLink}>office@enfold-health.com</a>
                </div>

                <div className={s.hours}>
                    <InfoTitle titleText='OFFICE HOURS' />
                    <div className={s.hoursText}>
                        <p className={s.weekDays}>Mo-Fr: 8:00-19:00</p>
                        <p>Sa: 8:00-14:00</p>
                        <p>Su: closed</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Information;
