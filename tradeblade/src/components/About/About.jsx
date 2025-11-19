import React from 'react';
import './About.css';

const About = () => {
    return (
        <section className="about" id="about">
            <div className="container about__container">
                
                <div className="about__content">
                    <h2 className="about__title">О КОМПАНИИ</h2>
                    <div className="about__text">
                        <p>
                            Мы опытная команда, для которой трейдинг – профессия. 
                            TradeBlade является авторизованным официальным брокером биржи Binance.
                        </p>
                        <p>
                            Он представляет пользователям множество преимуществ, 
                            таких как более высокая скорость синхронизации API и возможность 
                            создать учетную запись Binance через платформу TradeBlade всего в 1 клик.
                        </p>
                    </div>
                </div>

                <div className="about__cta">
                    <h3 className="cta__title">
                        Попробуйте сейчас и получите<br />
                        5 дней бесплатного пользования
                    </h3>
                    
                    <form className="cta__form" onSubmit={(e) => e.preventDefault()}>
                        <input 
                            type="email" 
                            placeholder="ВАШ E-MAIL" 
                            className="cta__input"
                            required
                        />
                        <button type="submit" className="cta__btn">
                            ПОПРОБОВАТЬ
                        </button>
                    </form>
                </div>

            </div>
        </section>
    );
};

export default About;