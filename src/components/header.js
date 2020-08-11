import React from 'react';
import './header.css';

import Hamburg from '../img/hamburg.png';
import Logo from '../img/growcases.png';

const Header = () => (
    <>
    <header className="header">
        <div className="header__container">
            <div className="hc__brand">
                <a href="/"><img className="hcb__logo" src={ Logo } /></a>
            </div>
            <ul className="hc__ul">
                <li className="hcu__li"><a href="/" className="hcul__a">Anasayfa</a></li>
                <li className="hcu__li"><a href="/SSS" className="hcul__a">S.S.S.</a></li>
                <li className="hcu__li"><a href="#" className="hcul__a">Partnerler</a></li>
                <li className="hcu__li"><a href="#" className="hcul__a">Çekilişler</a></li>
            </ul>
            <button className="hc__button"><span className="hcb__span">Giriş Yap</span></button>
            <button className="hc__hamburger"><img src={Hamburg} /></button>
        </div>
    </header>
    </>
)

export default Header;