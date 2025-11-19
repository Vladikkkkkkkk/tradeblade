import React from 'react';
import './HowItWorks.css';

const stepsData = [
    {
        title: "Создайте аккаунт",
        text: "Начните бесплатную 3-дневную пробную версию. Кредитная карта не требуется."
    },
    {
        title: "Подключить обмен API ключами",
        text: "Просто вставьте свои ключи API из личного кабинета."
    },
    {
        title: "Настройте аккаунт",
        text: "Поставьте нужные настройки депозита на каждый сигнал и нажмите сохранить."
    },
    {
        title: "Ваш копитрейдер запущен",
        text: "Просто расслабьтесь и начните получать пассивный доход от криптовалюты с помощью TradeBlade"
    }
];

const HowItWorks = () => {
    return (
        <section className="how-it-works" id="howItWorks">
            
            <div className="container">
                
                <h2 className="how__title">
                    КАК НАЧАТЬ ПОЛЬЗОВАТЬСЯ СЕРВИСОМ
                </h2>

                <div className="how__grid">
                    {stepsData.map((step, index) => (
                        <div key={index} className="how__step">
                            <div className="step-line"></div>
                            <h3 className="step-title">{step.title}</h3>
                            <p className="step-text">{step.text}</p>
                        </div>
                    ))}
                </div>

                <div className="how__action">
                    <button className="how__btn">
                        ПОПРОБОВАТЬ БЕСПЛАТНО
                    </button>
                </div>

            </div>
        </section>
    );
};

export default HowItWorks;