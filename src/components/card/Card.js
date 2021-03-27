import s from './Card.module.scss';

function Card(props) {
    return (
        <div className={s.wrapper}>
            <span className={s.text} style={props.style}>{props.cardText}</span>
        </div>
    );
}

export default Card;
