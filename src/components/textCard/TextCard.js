import s from './TextCard.module.scss';


function TextCard(props) {
  return (
    <div className={s.wrapper} style={props.styleWrapper} >
        <h2 className={s.title} style={props.styleTitle} >{props.titleText}</h2>
        <p className={s.text} style={props.styleText} >{props.textValue}</p>
    </div>
  );
}
export default TextCard;
