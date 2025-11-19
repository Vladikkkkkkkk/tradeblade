import React, { useState } from 'react';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="container header__container">
                
                <a href="/" className="header__logo">
                    <img src="/logo.svg" alt="TradeBlade Logo" />
                </a>

                <nav className={`header__nav ${isMenuOpen ? 'active' : ''}`}>
                    <button className="mobile-close-btn" onClick={toggleMenu}>&times;</button> 

                    <ul>
                        <li><a href="#numbers" onClick={toggleMenu}>ЦИФРЫ</a></li>
                        <li><a href="#deals" onClick={toggleMenu}>СДЕЛКИ ОНЛАЙН</a></li>
                        <li><a href="#about" onClick={toggleMenu}>О КОМПАНИИ</a></li>
                        <li><a href="#features">TRADEBLADE ЭТО</a></li>
                        <li><a href="#howItWorks" onClick={toggleMenu}>КАК НАЧАТЬ</a></li>
                        <li><a href="#tariffs" onClick={toggleMenu}>ТАРИФЫ</a></li>
                        <li><a href="#faq" onClick={toggleMenu}>FAQ</a></li>
                    </ul>
                    
                    <div className="header__mobile-actions">
                        <button className="btn-mobile btn-mobile--primary" onClick={toggleMenu}>РЕГИСТРАЦИЯ</button>
                        <button className="btn-mobile btn-mobile--outline" onClick={toggleMenu}>ВОЙТИ</button>
                    </div>

                </nav>

                <div className="header__auth">
                    <button className="btn-outline">ВХОД</button>
                    <button className="btn-primary">РЕГИСТРАЦИЯ</button>
                </div>
                
                <button className={`burger-btn ${isMenuOpen ? 'is-open' : ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
    );
};

export default Header;