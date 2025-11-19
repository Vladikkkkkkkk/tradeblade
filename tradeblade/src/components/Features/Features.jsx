import React from 'react';
import './Features.css';

const featuresData = [
    {
        id: 1,
        icon: "/item1.svg", 
        title: "Копи-трейдинг 24/7",
        text: "Copy-Trading позволяет следить за сделками команды и получать прибыль 24/7 без каких-либо усилий или проблем для вас."
    },
    {
        id: 2,
        icon: "/item2.svg",
        title: "Торговля спотовыми и фьючерсными сделками",
        text: "Платформа для копи-трейдинга поддерживает торговлю как спотовыми, так и фьючерсными сделками на Binance."
    },
    {
        id: 3,
        icon: "/item3.svg",
        title: "Высокая прибыль каждый день",
        text: "Каждая сделка показывает хорошие результаты на рынках за счет хорошего денежного и риск менеджмента."
    },
    {
        id: 4,
        icon: "/item4.svg",
        title: "Собственный курс по трейдингу",
        text: "Мы хотим менять комьюнити, улучшать его. В личном кабинете на сайте вы найдете наш собственный курс по криптовалютам."
    },
    {
        id: 5,
        icon: "/item5.svg",
        title: "Сильное окружение",
        text: "Ты попадаешь в сильное крипто окружение, ведь развиваться легче когда нас много. В чате присутствуют люди из нашей команды."
    }
];

const Features = () => {
    return (
        <section className="features" id="features">
            <div className="container features__container">
                
                <div className="features__head">
                    <h2 className="features__title">
                        TRADEBLADE <br /> ЭТО
                    </h2>
                </div>

                <div className="features__grid">
                    {featuresData.map((item) => (
                        <div key={item.id} className="feature-card">
                            <div className="feature-icon-box">
                                <img src={item.icon} alt="" className="feature-icon" />
                            </div>
                            <div className="feature-content">
                                <h3 className="feature-title">{item.title}</h3>
                                <p className="feature-text">{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Features;