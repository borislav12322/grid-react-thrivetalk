import s from './Logo.module.scss';


function Logo(props) {
    return (
        <div className={s.wrapperLogo} style={props.logoStyle}>
            <span className={s.logo}  >Thrivetalk</span>
        </div>
    );
}

export default Logo;
