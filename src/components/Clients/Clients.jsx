import React, {useRef, useEffect} from 'react';
import bl1x1 from '../../assets/images/users/bl1x1.png';
import quzzen from '../../assets/images/users/quzzeN.jpg';
import renik from '../../assets/images/users/renik.png';
import whipser from '../../assets/images/users/whipser.png';
import arrowDown from '../../assets/icons/down.svg'
import scoffy from '../../assets/images/users/Scoffy.jpg';
import ios1ph from '../../assets/images/users/ios1ph.png';
import REDraGEN from '../../assets/images/users/REDraGEN.jpg';
import k175un4 from '../../assets/images/users/k175un4.png';
import k1yotakaaaaa from '../../assets/images/users/k1yotakaaaaa.jpg';
import aceqxb0b from '../../assets/images/users/aceqxb0b.jpg';
import gsap from "gsap";
import './_Clients.scss';

const Clients = () => {
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
    }, []);

    const cardList = [
        {id: 1, title: 'bl1x1', image: bl1x1},
        {id: 2, title: 'quzzeN', image: quzzen},
        {id: 3, title: 'reNIK', image: renik},
        {id: 4, title: 'Whisper', image: whipser},
        {id: 5, title: 'Scoffy_', image: scoffy},
        {id: 6, title: 'ios1ph', image: ios1ph},
        {id: 7, title: 'REDraGEN', image: REDraGEN},
        {id: 8, title: 'k175un4', image: k175un4},
        {id: 9, title: 'k1yotakaaaaa', image: k1yotakaaaaa},
        {id: 10, title: 'aceqxb0b', image: aceqxb0b}
    ];

    return (
        <section className="clients">
            <div ref={containerRef} className="clients__title-block">
                <h5 className="clients__title">С кем нам удалось поработать</h5>
                <p className="clients__text">
                    Про игроки, стримеры, медиа проекты </p>
            </div>
            <div className="clients__container container">
                {cardList.map((card) => (
                    <div key={card.id} className={`card__item card__item--${card.id}`}>
                        <img src={card.image} alt={card.title} className="card__img"/>
                        <span className="card__title">{card.title}</span>
                    </div>
                ))}
            </div>
            <div className="clients__down">
                <a href="#tips"><img src={arrowDown} alt="arrow"/></a>
            </div>
        </section>
    );
};

export default Clients;
