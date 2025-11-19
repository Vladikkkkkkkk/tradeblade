import React, { useState } from 'react';
import './FAQ.css';

const faqData = [
    {
        id: 1,
        question: "Что такое TradeBlade",
        answer: "Мы опытная команда, для которой трейдинг – профессия. TradeBlade является авторизованным официальным брокером биржи Binance. Он представляет пользователям множество преимуществ, таких как более высокая скорость синхронизации API и возможность создать учетную запись Binance через платформу TradeBlade всего в 1 клик."
    },
    {
        id: 2,
        question: "Что TradeBlade предлагает инвесторам",
        answer: "Мы опытная команда, для которой трейдинг – профессия. TradeBlade является авторизованным официальным брокером биржи Binance. Он представляет пользователям множество преимуществ, таких как более высокая скорость синхронизации API и возможность создать учетную запись Binance через платформу TradeBlade всего в 1 клик."
    },
    {
        id: 3,
        question: "Должен ли я перевести свои средства на TradeBlade",
        answer: "Мы опытная команда, для которой трейдинг – профессия. TradeBlade является авторизованным официальным брокером биржи Binance. Он представляет пользователям множество преимуществ, таких как более высокая скорость синхронизации API и возможность создать учетную запись Binance через платформу TradeBlade всего в 1 клик."
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null); 

    const toggleAccordion = (id) => {
        setActiveIndex(activeIndex === id ? null : id);
    };

    return (
        <section className="faq" id="faq">
            <div className="container">
                <h2 className="faq__title">ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</h2>

                <div className="faq__list">
                    {faqData.map((item) => (
                        <div 
                            key={item.id} 
                            className={`faq__item ${activeIndex === item.id ? 'open' : ''}`}
                        >
                            <div 
                                className="faq__question"
                                onClick={() => toggleAccordion(item.id)}
                            >
                                <span>{item.question}</span>
                                <span className="toggle-icon">&gt;</span> 
                            </div>

                            {activeIndex === item.id && (
                                <div className="faq__answer">
                                    <p>{item.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
