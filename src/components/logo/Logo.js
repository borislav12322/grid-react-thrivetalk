import s from './Logo.module.scss';


function Logo(props) {
    return (
        <div className={s.wrapperLogo}>
            <span className={s.logo}>{props.logoValue}</span>
        </div>
    );
}

export default Logo;
