import React, {useState, useRef, useEffect} from 'react';
import standart from '../../assets/images/componentsPC/standart.png'
import ultimate from '../../assets/images/componentsPC/ultimate.png'
import fire from '../../assets/images/componentsPC/fireGpu.png'
import internet from '../../assets/images/componentsPC/internet.png'
import sound from '../../assets/images/componentsPC/sound.png'

import gsap from "gsap";
import './_Tab.scss';

function TabContent({tab}) {

    const containerRef = useRef(null);
    const hasAnimatedRef = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimatedRef.current) {
                    gsap.fromTo(containerRef.current,
                        {x: '-100%', opacity: 0},
                        {x: '0%', opacity: 1, duration: 1, ease: 'power3.out'}
                    );
                    hasAnimatedRef.current = true;
                    observer.unobserve(containerRef.current);
                }
            },
            {threshold: 0.1}
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, [tab]);

    switch (tab) {
        case 1:
            return <div className={'tabs__content-item'} ref={containerRef}>
                <div className="tabs__content-content">
                    <span className="tabs__content-title">Базовая оптимизация</span>
                    <p className="tabs__content-text">1. Переустановка Windows с использованием официального образа</p>
                    <p className="tabs__content-text">2. Установка всех необходимых драйверов</p>
                    <p className="tabs__content-text">3. Активация Windows и установка программного обеспечения</p>
                    <p className="tabs__content-text">4. Глубокая настройка Windows</p>
                    <p className="tabs__content-text">5. Настройка монитора и гарантия производительности</p>
                    <p className="tabs__content-text">
                        Из эффектов - Повышается FPS, понижаются системные задержки. <br/>
                        Картинка становится плавнее в разы в играх и на рабочем столе, мышь <br/>
                        ощущается резче, также улучшается регистрация пуль. Работа производится через <br/>
                        Anydesk. Возможен выезд в пределах МКАД (цена может отличаться).
                    </p>
                </div>
                <div className="tabs__content-img">
                    <img src={standart} alt="img"/>
                </div>
            </div>;
        case 2:
            return <div className={'tabs__content-item'}>
                <div className="tabs__content-content">
                    <span className="tabs__content-title">Ultimate</span>
                    <p className="tabs__content-text">1. Переустановка & Полноценная Настройка Windows</p>
                    <p className="tabs__content-text">2. Прошивка & Настройка Bios</p>
                    <p className="tabs__content-text">3. Разгон + Понижение таймингов ОЗУ</p>
                    <p className="tabs__content-text">4. Разгон / Андервольтинг CPU</p>
                    <p className="tabs__content-text">5. Разгон / Андервольтинг GPU</p>
                    <p className="tabs__content-text">6. Настройка Роутера, Интернета</p>
                    <p className="tabs__content-text">
                        Из эффектов - Повышается FPS, понижаются системные задержки. <br/>
                        Картинка становится плавнее в разы в играх и на рабочем столе, мышь <br/>
                        ощущается резче, также улучшается регистрация пуль. Работа производится через <br/>
                        Anydesk. Возможен выезд в пределах МКАД (цена может отличаться). <br/>
                        Плюсом ко всему вы получаете бесплатные дальнейшие консультации по апгрейду.
                    </p>

                </div>
                <div className="tabs__content-img">
                    <img src={ultimate} alt="img"/>
                </div>
            </div>;
        case 3:
            return <div className={'tabs__content-item'}>
                <div className="tabs__content-content">
                    <span className="tabs__content-title">Разгон железа</span>
                    <p className="tabs__content-text">1. Обеспечение оптимальной производительности</p>
                    <p className="tabs__content-text">2. Оптимизация игрового процесса</p>
                    <p className="tabs__content-text">3. Профессиональный подход</p>
                    <p className="tabs__content-text">4. Гарантия стабильности системы</p>
                    <p className="tabs__content-text">5. Индивидуальная настройка и поддержка 24/7</p>
                    <p className="tabs__content-text">
                        Разгон процессора и видеокарты – это эффективный способ <br/>
                        улучшить производительность вашего компьютера и повысить <br/>
                        качество работы и игр. Доверьтесь профессионалам, чтобы извлечь максимум <br/>
                        из вашего оборудования, и наслаждайтесь его новыми возможностями!
                    </p>
                </div>
                <div className="tabs__content-img">
                    <img src={fire} alt="img"/>
                </div>
            </div>;
        case 4:
            return <div className={'tabs__content-item'}>
                <div className="tabs__content-content">
                    <span className="tabs__content-title">Настройка интернета</span>
                    <p className="tabs__content-text">1. Установка правильных драйверов</p>
                    <p className="tabs__content-text">2. Настройка параметров адаптера</p>
                    <p className="tabs__content-text">3. Настройка днс серверов</p>
                    <p className="tabs__content-text">4. Оптимизация BufferBloat</p>
                    <p className="tabs__content-text">5. Настройка параметров сети</p>
                    <p className="tabs__content-text">
                        Мы проведем комплексную настройку вашего интернета, улучшим <br/>
                        его скорость, стабильность и регистрацию пуль. От базовой оптимизации до <br/>
                        продвинутых настроек — все для того, чтобы ваш интернет работал на <br/>
                        максимуме возможностей. Доверьтесь нам, и вы ощутите разницу!
                    </p>

                </div>
                <div className="tabs__content-img">
                    <img src={internet} alt="img"/>
                </div>
            </div>;
        case 5:
            return <div className={'tabs__content-item'}>
                <div className="tabs__content-content">
                    <span className="tabs__content-title">Настройка звука</span>
                    <p className="tabs__content-text">1. Установка и настройка звука и микрофона</p>
                    <p className="tabs__content-text">2. Объяснение работы звука</p>
                    <p className="tabs__content-text">3. Детальная проверка</p>
                    <p className="tabs__content-text">4. Индивидуальный подбор и тестирование</p>
                    <p className="tabs__content-text">5. Время выполнения ≈ 30 минут</p>
                    <p className="tabs__content-text">
                        Мы предлагаем полную настройку звука и микрофона, которая <br/>
                        включает детальную проверку и индивидуальный подбор параметров <br/>
                        для вашей игры. Это обеспечивает оптимальное качество и ясность <br/>
                        звука, что улучшает игровой процесс.
                    </p>

                </div>
                <div className="tabs__content-img">
                    <img src={sound} alt="img"/>
                </div>
            </div>;

    }
}

function Tabs() {
    const [activeTab, setActiveTab] = useState(1);

    return (
        <div className={'tabs__wrapper'}>
            <div className="tabs">
                <button className={'tabs__btn'} onClick={() => setActiveTab(1)}>Базовая</button>
                <button className={'tabs__btn'} onClick={() => setActiveTab(2)}>Ultimate</button>
                <button className={'tabs__btn'} onClick={() => setActiveTab(3)}>Разгон железа</button>
                <button className={'tabs__btn'} onClick={() => setActiveTab(4)}>Настройка сети</button>
                <button className={'tabs__btn'} onClick={() => setActiveTab(5)}>Настройка звука</button>
            </div>
            <div className="tabs__content">
                <TabContent tab={activeTab}/>
            </div>
        </div>
    );
}

export default Tabs;
