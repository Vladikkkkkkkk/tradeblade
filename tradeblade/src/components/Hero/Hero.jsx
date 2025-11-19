import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Hero.css';

const Hero = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <section className="hero">
            <div className="hero__glow"></div>

            <div className="container hero__container">
                <div className="hero__content" data-aos="fade-right">
                    <h1 className="hero__title">
                        МОМЕНТАЛЬНО <br />
                        КОПИРУЙ СДЕЛКИ <br />
                        <span className="text-outline">ПРОФИ ТРЕЙДЕРОВ</span>
                    </h1>
                    <p className="hero__subtitle">
                        Начни копировать сделки с успешной командой профессиональных 
                        трейдеров в автоматическом режиме.
                    </p>

                    <form className="hero__form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <input 
                                type="email" 
                                placeholder="ВАШ E-MAIL" 
                                className="hero__input"
                                required
                            />
                            <button type="submit" className="hero__btn">
                                НАЧАТЬ
                            </button>
                        </div>
                    </form>
                    
                    <p className="hero__note">5 дней бесплатного пользования</p>
                </div>

                <div className="hero__visual" data-aos="fade-left">
                    <img 
                        src="/hero-section-image.png" 
                        alt="Trading Interface" 
                        className="hero__image"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;