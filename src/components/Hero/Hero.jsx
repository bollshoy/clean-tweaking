import React, {useState, useRef, useEffect} from 'react'
import pc from '../../assets/images/pc.png'
import {NavLink} from 'react-router-dom'
import gsap from 'gsap'
import Typewriter from '../Typewriter/Typewriter.jsx'
import './_Hero.scss'

const Hero = () => {
	const [offset, setOffset] = useState({x: 0, y: 0})
	const imgRef = useRef(null)
	const textRef = useRef(null)
	
	useEffect(() => {
		// animations img
		gsap.fromTo(imgRef.current,
			{y: '-100%', opacity: 0},
			{y: '0%', opacity: 1, duration: 1.5, ease: 'power3.out'}
		)
		
		// animations text
		gsap.fromTo(textRef.current,
			{opacity: 0, y: 50},
			{opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 1}
		)
	}, [])
	
	// animations img x2
	const handleMouseMove = (e) => {
		const {clientX, clientY} = e
		const x = (window.innerWidth / 2 - clientX) / 10
		const y = (window.innerHeight / 2 - clientY) / 10
		setOffset({x, y})
	}
	return (
		<section className="hero" onMouseMove={handleMouseMove}>
			<div className="hero__container container">
				<div className="hero__content">
					<h1 className="hero__title"><Typewriter text="Лучшая оптимизация вашего ПК" delay={250}/></h1>
					<p className="hero__text" ref={textRef}>
						Наши услуги направлены на оптимизацию вашего компьютерного опыта, и
						мы приглашаем вас извлечь
						максимальную производительность из вашего железа. Мы
						специализируемся на настройке ПК, Ноутбуков
						и Моноблоков на базе операционной системы Windows.
					</p>
					<NavLink to={'/buy'} className={'tips__item'}>Купить
						оптимизацию</NavLink>
				</div>
				<div
					className="hero__img"
					ref={imgRef}
					style={{
						transform: `translate(${offset.x}px, ${offset.y}px)`,
					}}>
					<img src={pc} alt="img"/>
				</div>
			</div>
		</section>
	)
}

export default Hero
