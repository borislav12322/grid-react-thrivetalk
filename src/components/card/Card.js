import s from './Card.module.scss';

function Card(props) {
    return (
        <div className={`${s.wrapper} + ${props.ClassName}`} style = {props.styleWrapper}>
            <span className={`${s.text} + ${props.textClass}`} style={props.styleText}>{props.cardText}</span>
        </div>
    );
}

export default Card;
