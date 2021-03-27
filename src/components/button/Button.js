import s from './Button.module.scss';

function Button(props) {
    return (
        <button className={`${s.btnBlue} + ${s.btnYellow}`}>
            {props.btnValue}
        </button>
        
    );
}

export default Button;
