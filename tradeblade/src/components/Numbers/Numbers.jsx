import React from 'react';
import './Numbers.css';

const numbersData = [
    {
        label: "Торговой прибыли",
        value: "2756%",
    },
    {
        label: "Фьючерсных и спотовых сделок",
        value: "67",
    },
    {
        label: "Прибыль подписчиков",
        value: "375000",
    }
];

const Numbers = () => {
    return (
        <section className="numbers" id="numbers">
            <div className="container numbers__container">
                
                <div className="numbers__head">
                    <h2 className="numbers__title">ЦИФРЫ</h2>
                    <p className="numbers__date">Сентябрь 2022</p>
                </div>

                <div className="numbers__grid">
                    {numbersData.map((item, index) => (
                        <div key={index} className="stat-card">
                            <p className="stat-label">{item.label}</p>
                            <p className="stat-value">{item.value}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Numbers;