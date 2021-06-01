import React from 'react';
import s from "./MobileMenuModule.module.scss";

export default function MobileMenuModule({items = [], active, setActive}) {
    return (

        <nav className={active ? s.active + s.mobile__menu : s.mobile__menu} onClick={() => setActive(false)}>
            <div className={s.blur}>
            </div>
            <div className={s.mobile__content}>
                <button className={s.menu__close__btn}>
                </button>
                <ul className={s.menu__list} onClick={e => e.stopPropagation()}>
                    {items.map(item =>
                        <li className={s.listItem}>
                            <a href={item.href} className={s.mobile__link}>
                                {item.value}
                            </a>
                        </li>

                    )}
                </ul>


            </div>

            <button className={s.mobile__btn} onClick={e => e.stopPropagation()}>
                Contact us
            </button>
        </nav>

    );
};

