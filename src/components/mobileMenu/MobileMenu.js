import React from 'react';
import  "./MobileMenu.scss";

export default function MobileMenu({items = [], active, setActive}) {
    return (

            <nav className={active ? 'active' + ' mobile__menu' : 'mobile__menu'} onClick={() => setActive(false)}>
                <div className="blur">
                </div>
<div className="mobile__content">
    <button className="menu__close--btn">
    </button>
                <ul className='menu__list' onClick={e => e.stopPropagation()}>
                    {items.map(item =>
                    <li className='listItem'>
                        <a href={item.href} className='mobile__link'>
                            {item.value}
                        </a>
                    </li>

                    )}
                </ul>


</div>

                <button className='mobile__btn' onClick={e => e.stopPropagation()}>
                    Contact us
                </button>
            </nav>

    );
};

