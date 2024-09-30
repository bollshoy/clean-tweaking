import React, {useState, useRef, useEffect} from 'react'
import test1 from '../../assets/images/testSystem/test1.svg';
import test2 from '../../assets/images/testSystem/test2.svg';
import test3 from '../../assets/images/testSystem/test3.svg';
import gsap from 'gsap'
import './_Test.scss'

const Test = ({test}) => {
	const containerRef = useRef(null)
	const hasAnimatedRef = useRef(false)
	
	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting && !hasAnimatedRef.current) {
					gsap.fromTo(containerRef.current,
						{x: '100%', opacity: 0},
						{x: '0%', opacity: 1, duration: 1, ease: 'power3.out'}
					)
					hasAnimatedRef.current = true
					observer.unobserve(containerRef.current)
				}
			},
			{threshold: 0.1}
		)
		
		if (containerRef.current) {
			observer.observe(containerRef.current)
		}
		
		return () => {
			if (containerRef.current) {
				observer.unobserve(containerRef.current)
			}
		}
	}, [test])
	
	return (
		<section className="test">
			<div className="test__container container" ref={containerRef}>
				<div className="test__text">
					<h4 className="test__title">Тесты системы без оптимизации, базовая
						оптимизация, Ultimate
						оптимизация</h4>
					<p className="test__text">В игре Counter-Strike 2</p>
					<div className="test__circle">
						<div className="test__circle-item">
							<span className="circle__title"><span>FPS</span> Ultimate оптимизация</span>
							<div className="circle__item"></div>
						</div>
						<div className="test__circle-item">
							<span className="circle__title"><span>FPS</span> Базовая оптимизация</span>
							<div className="circle__item"></div>
						</div>
						<div className="test__circle-item">
							<span
								className="circle__title"><span>FPS</span> Без оптимизации</span>
							<div className="circle__item"></div>
						</div>
					</div>
				</div>
				<div className="test__content">
					<div className="test__item">
						<img src={test1} alt="" className="test__img"/>
					</div>
					<div className="test__item">
						<img src={test2} alt="" className="test__img"/>
					</div>
					<div className="test__item">
						<img src={test3} alt="" className="test__img"/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Test