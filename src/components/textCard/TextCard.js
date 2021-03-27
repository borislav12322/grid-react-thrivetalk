import s from './TextCard.module.scss';


function TextCard(props) {
  return (
    <div className={s.wrapper}>
        <h2 className={s.title}>{props.titleText}</h2>
        <p className={s.text}>{props.textValue}</p>
    </div>
  );
}
export default TextCard;
