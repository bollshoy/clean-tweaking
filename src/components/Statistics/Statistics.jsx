import React, {useRef, useEffect} from 'react';
import perfomance from '../../assets/images/statistics/performance.svg'
import user from '../../assets/images/statistics/user.svg'
import world from '../../assets/images/statistics/world.svg'
import rocket from '../../assets/images/statistics/rocket.svg'
import gsap from "gsap";
import './_Statistics.scss'

const Statistics = () => {

    const containerRef = useRef(null);
    const hasAnimatedRef = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimatedRef.current) {
                    gsap.fromTo(containerRef.current,
                        {x: '100%', opacity: 0},
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

    const statisticsList = [
        {id: 1, text: `500+ бустов сделано за все время`, images: world},
        {id: 2, text: '5-10 бустов еженедельно', images: user},
        {id: 3, text: 'До 75% производительности', images: perfomance},
    ]

    return (
        <section className={'statistics'}>
            <div className="statistics__title">
                <h6 className={'statistics__title-item'}>Статистика бустов</h6>
                <img src={rocket} alt="img" className="statistics__img-item"/>
            </div>
            <div className="statistics__container container" ref={containerRef}>
                {statisticsList.map((item) => (
                    <div className="statistics__item" key={item.id}>
                        <img className="statistics__image" src={item.images} alt={item.text}/>
                        <p className="statistics__text">{item.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Statistics;