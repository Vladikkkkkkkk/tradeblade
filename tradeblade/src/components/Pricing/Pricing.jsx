import React, { useState } from 'react';
import './Pricing.css';

const plansData = [
    {
        name: "STANDART",
        cardType: "card--dark",
        features: [
            "Ручной трейдинг",
            "Автоматическое или полуавтоматическое копирование сделок",
            "Личный кабинет со статистикой",
            "Среднесрочные сделки с уровнями набора портфеля"
        ],
    },
    {
        name: "VIP",
        cardType: "card--purple",
        features: [
            "Ручной трейдинг",
            "Автоматическое или полуавтоматическое копирование сделок",
            "Личный кабинет со статистикой",
            "Краткосрочные, среднесрочные и инвест сделки",
            "Доступ в Vip чат с командой",
            "Наш авторский курс по трейдингу"
        ],
    }
];

const pricingOptions = [
    { duration: '12 месяцев', priceSpot: 234, priceFutures: 280, discount: '-35%' }, 
    { duration: '6 месяцев', priceSpot: 150, priceFutures: 180, discount: '-25%' }, 
    { duration: '3 месяца', priceSpot: 80, priceFutures: 95, discount: '-15%' },
    { duration: '1 месяц', priceSpot: 30, priceFutures: 35, discount: '0%' }
];

const getPriceDetails = (duration, tab) => {
    const option = pricingOptions.find(opt => opt.duration === duration) || pricingOptions[0];
    const price = tab === 'SPOT' ? option.priceSpot : option.priceFutures;
    const discount = option.discount;
    
    return { price, discount };
};

const Pricing = () => {
    const [activeTab, setActiveTab] = useState('SPOT');
    const [durationState, setDurationState] = useState({
        'STANDART': '12 месяцев',
        'VIP': '12 месяцев',
    });

    const toggleTab = (tab) => setActiveTab(tab);
    
    const handleDurationChange = (planName, value) => {
        setDurationState(prev => ({
            ...prev,
            [planName]: value
        }));
    };

    return (
        <section className="pricing" id="tariffs">
            <div className="container">
                <h2 className="pricing__title">ТАРИФЫ</h2>

                <div className="pricing__toggle-wrapper"> 
                    <div className="pricing__toggle">
                        <button 
                            className={`toggle__btn ${activeTab === 'SPOT' ? 'active' : ''}`}
                            onClick={() => toggleTab('SPOT')}
                        >
                            СПОТ
                        </button>
                        <button 
                            className={`toggle__btn ${activeTab === 'ФЬЮЧЕРС' ? 'active' : ''}`}
                            onClick={() => toggleTab('ФЬЮЧЕРС')}
                        >
                            ФЬЮЧЕРС
                        </button>
                    </div>
                </div>

                <div className="pricing__grid">
                    {plansData.map((plan, index) => {
                        const duration = durationState[plan.name];
                        const priceDetails = getPriceDetails(duration, activeTab); 
                        
                        return (
                            <div key={index} className={`pricing-card ${plan.cardType}`}>
                                <h3 className="card__name">{plan.name}</h3>

                                <ul className="card__features">
                                    {plan.features.map((feature, fIndex) => (
                                        <li key={fIndex} className="feature-item">
                                            <span className="check-icon">✓</span> 
                                            <span className="feature-text-content">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="card__details">
                                    <div className="card__price-box">
                                        <span className="card__price">${priceDetails.price}</span>
                                        <span className="card__discount">{priceDetails.discount}</span>
                                    </div>
                                    
                                    <div className="card__duration-select-wrapper">
                                        <select 
                                            className="card__duration-select"
                                            value={duration}
                                            onChange={(e) => handleDurationChange(plan.name, e.target.value)}
                                        >
                                            {pricingOptions.map(option => (
                                                <option key={option.duration} value={option.duration}>
                                                    {option.duration}
                                                </option>
                                            ))}
                                        </select>
                                        <span className="arrow-down">∨</span> 
                                    </div>
                                </div>
                                
                                <button className="btn--cta">
                                    ПОПРОБОВАТЬ
                                    <span className="cta-note">5 дней бесплатно</span>
                                </button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};

export default Pricing;