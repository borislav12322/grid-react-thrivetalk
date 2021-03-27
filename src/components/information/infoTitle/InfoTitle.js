import s from './InfoTitle.module.scss';

function InfoTitle(props) {
    return (
        <h2 className={s.informationTitle}>
            {props.titleText}
        </h2>
    );
}
export default InfoTitle;
