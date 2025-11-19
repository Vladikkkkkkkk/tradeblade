import React from 'react';
import './DealsSlider.css';

const dealsData = [
    { pair: "ETH/USDT", type: "SPOT", profit: "16.3%", target: "Цель 4", date: "05.10.2022" },
    { pair: "BTC/USDT", type: "SPOT", profit: "6.02%", target: "Цель 3", date: "06.10.2022" },
    { pair: "NEAR/USDT", type: "SPOT", profit: "58.62%", target: "Цель 4", date: "06.10.2022" },
    { pair: "SOL/USDT", type: "SPOT", profit: "22.5%", target: "Цель 2", date: "05.10.2022" },
    { pair: "ADA/USDT", type: "SPOT", profit: "0.96%", target: "Цель 4", date: "06.10.2022" },
];

const DealsSlider = () => {
    return (
        <section className="deals" id="deals">
            <div className="container">
                
                <div className="deals__header">
                    <h2 className="deals__title">ПРОШЕДШИЕ СДЕЛКИ</h2>
                    <div className="deals__status">
                        <span className="status-dot"></span> Онлайн
                    </div>
                </div>

                <div className="deals__scroll-container">
                    {dealsData.map((deal, index) => (
                        <div className="deal-card" key={index}>
                            <div className="card-content">
                                <div className="card-top">
                                    <span className="card-pair">{deal.pair}</span>
                                    <span className="card-type">{deal.type} · 5 мин. назад</span>
                                </div>
                                
                                <div className="card-middle">
                                    <span className="card-label">ПРИБЫЛЬ</span>
                                    <div className="card-profit">
                                        {deal.profit} 
                                        <img src="/icon/arrow.svg" alt="Up" className="arrow-icon" />
                                    </div>
                                </div>

                                <div className="card-footer">
                                    <span className="card-target">{deal.target}</span>
                                    <span className="card-date">Дата входа {deal.date}</span>
                                </div>
                            </div>

                            <img src="/item-bg.svg" alt="" className="card-bg-decor" />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default DealsSlider;