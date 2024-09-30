import React from 'react';
import guarantee from '../../assets/icons/cpu.svg'
import price from '../../assets/icons/dollars.svg'
import work from '../../assets/icons/profile.svg'
import support from '../../assets/icons/support.svg'
import './_Advantages.scss'

const Advantages = () => {
    return (
        <section className="advantages">
            <div className="advantages__container container">
                <h3 className="advantages__title">Наши преимущества</h3>
                <div className="advantages__content">
                    <div className="advantages__block">
                        <img src={work} alt="img" className="advantages__img"/>
                        <span className="advantages__block-title">Слаженная работа</span>
                    </div>
                    <div className="advantages__block">
                        <img src={price} alt="img" className="advantages__img"/>
                        <span className="advantages__block-title">Низкие цены</span>
                    </div>
                    <div className="advantages__block">
                        <img src={guarantee} alt="img" className="advantages__img"/>
                        <span className="advantages__block-title">Гарантия качества</span>
                    </div>
                    <div className="advantages__block">
                        <img src={support} alt="img" className="advantages__img"/>
                        <span className="advantages__block-title">Поддержка 24/7</span>
                    </div>
                </div>
            </div>
            <div className="advantages__line"></div>
        </section>
    );
};

export default Advantages;