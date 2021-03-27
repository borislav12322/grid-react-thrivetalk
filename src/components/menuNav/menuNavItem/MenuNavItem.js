import s from './MenuNavItem.module.scss';

function MenuNavItem(props) {
    return (
        <li className={s.menuItem}>
            <a href={props.to} className={s.menuLink}>{props.linkValue}</a>
        </li>
    );
}

export default MenuNavItem;
