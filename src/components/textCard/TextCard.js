import s from './TextCard.module.scss';


function TextCard(props) {
  return (
    <div className={s.card} style={props.styleWrapper} >
        <div className={s.wrapper}>
            <h2 className={s.title} style={props.styleTitle} >{props.titleText}</h2>
            <p className={s.text} style={props.styleText} >{props.textValue}</p>
        </div>
    </div>
  );
}
export default TextCard;
