import s from './Information.module.scss';
import InfoTitle from './infoTitle/InfoTitle';

function Information() {
    return (
        <div className={s.wrapper}>
            <img src="" alt="" className={s.image} />
            <div className={s.content}>
                <div className={s.someInfo}>
                    <InfoTitle titleText="SOME INFO" />
                    <p className={s.textInfo}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula.</p>
                </div>
            
            <div className={s.phoneNumber}>
                <InfoTitle titleText = 'ENFOLD HEALTH'/>
                <p className={s.phoneNumberText}>Main Street 1, Olcott Buffalo, United States</p>
                <span className={s.number}>+555 283 784 333</span>
                <a href="" className={s.emailLink}>office@enfold-health.com</a>
            </div>
            </div>
        </div>
    );
}
export default Information;
