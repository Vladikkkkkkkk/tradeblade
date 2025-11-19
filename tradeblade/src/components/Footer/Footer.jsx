import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="container footer__container">
                
                <div className="footer__left">
                    <h3 className="footer__title">БЫСТРАЯ НАВИГАЦИЯ</h3>
                    
                    <nav className="footer__nav">
                        <ul>
                            <li><a href="#numbers">ЦИФРЫ</a></li>
                            <li><a href="#deals">СДЕЛКИ ОНЛАЙН</a></li>
                            <li><a href="#about">О КОМПАНИИ</a></li>
                            <li><a href="#features">TRADEBLADE ЭТО</a></li>
                            <li><a href="#howItWorks">КАК НАЧАТЬ</a></li>
                            <li><a href="#tariffs">ТАРИФЫ</a></li>
                            <li><a href="#faq">FAQ</a></li>
                        </ul>
                    </nav>
                </div>

                <div className="footer__right">
                    <a href="/" className="footer__logo">
                        <img src="/logo.svg" alt="TradeBlade Logo"/>
                    </a>
                    <p className="footer__copyright">
                        © 2022 TradeBlade. All rights reserved
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;