import s from './MenuNav.module.scss';
import MenuNavItem from './menuNavItem/MenuNavItem';

function MenuNav() {
    return (
        <div className={s.menuNavListWrapper}>
        <ul className={s.menuNavList}>
            <MenuNavItem linkValue='Home' />
            <MenuNavItem linkValue='About' />
            <MenuNavItem linkValue='Services' />
            <MenuNavItem linkValue='Blog' />
        </ul>
        </div>
    );
}

export default MenuNav;
