import s from './Card.module.scss';

function Card(props) {
    return (
        <div className={s.wrapper} style = {props.styleWrapper}>
            <span className={s.text} style={props.styleText}>{props.cardText}</span>
        </div>
    );
}

export default Card;
