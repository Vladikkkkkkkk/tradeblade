import React from 'react';
import './FooterCTA.css';

const FooterCTA = () => {
    return (
        <section className="footer-cta">
            <div className="container footer-cta__container">
                
                <div className="cta__text-content">
                    <h2 className="cta__title">
                        Начните прямо сейчас с бесплатным <br />
                        5-и дневным пробным периодом!
                    </h2>
                </div>

                <form className="cta__form" onSubmit={(e) => e.preventDefault()}>
                    <input 
                        type="email" 
                        placeholder="ВАШ E-MAIL" 
                        className="cta__input"
                        required
                    />
                    <button type="submit" className="cta__btn">
                        ЗАРЕГИСТРИРОВАТЬСЯ
                    </button>
                </form>

            </div>
        </section>
    );
};

export default FooterCTA;