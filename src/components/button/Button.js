import s from './Button.module.scss';

function Button(props) {
    return (
        <button className={props.btnClass}>
            {props.btnValue}
        </button>
        
    );
}

export default Button;
