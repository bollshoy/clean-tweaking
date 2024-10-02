import React, {useState, useEffect} from 'react'
import {ref, set, get, child} from 'firebase/database'
import {database} from '../../../firebaseConfig'
import {gsap} from 'gsap'
import logo from '../../assets/images/recleaner/recleanerLogo.jpg'
import recleaner1 from '../../assets/images/recleaner/recleaner-1.png'
import recleaner2 from '../../assets/images/recleaner/recleaner-2.png'
import recleaner3 from '../../assets/images/recleaner/recleaner-3.png'
import vk from '../../assets/icons/vk.svg'
import github from '../../assets/icons/github.svg'
import discord from '../../assets/icons/discord.svg'
import home from '../../assets/icons/home.svg'
// advantages
import defense from '../../assets/icons/advantages/defense.svg'
import security from '../../assets/icons/advantages/security.svg'
import update from '../../assets/icons/advantages/update.svg'
import visual from '../../assets/icons/advantages/visual.svg'
import './_Recleaner.scss'
import {NavLink} from 'react-router-dom'
import advantages from '../../components/Advantages/Advantages.jsx'

const Recleaner = () => {
	const [userCount, setUserCount] = useState(0)
	const [currentItem, setCurrentItem] = useState(1)
	
	const fetchUserCount = async () => {
		try {
			const dbRef = ref(database)
			const snapshot = await get(child(dbRef, 'usercount'))
			if (snapshot.exists()) {
				setUserCount(snapshot.val())
			} else {
				console.log('No data available')
			}
		} catch (error) {
			console.error('Error fetching user count:', error)
		}
	}
	
	const incrementUserCount = async () => {
		try {
			const newCount = userCount + 1
			const dbRef = ref(database, 'usercount')
			await set(dbRef, newCount)
			setUserCount(newCount)
		} catch (error) {
			console.error('Error incrementing user count:', error)
		}
	}
	
	useEffect(() => {
		fetchUserCount()
	}, [])
	
	const recleanerList = [
		{id: 1, title: 'Home', image: home, href: '/'},
		{
			id: 2,
			title: 'Discord',
			image: discord,
			href: 'https://discord.gg/6muVyCHYsZ'
		},
		{
			id: 3,
			title: 'GitHub',
			image: github,
			href: 'https://github.com/changelog-download'
		},
		{
			id: 4,
			title: 'VK',
			image: vk,
			href: 'https://vk.com/recleaner_official'
		},
	]
	
	// animation gsap img
	useEffect(() => {
		gsap.fromTo(
			'.recleaner__image',
			{y: '-100vh', opacity: 0, rotate: '-30deg'},
			{
				y: '0',
				opacity: 1,
				rotate: '0deg',
				duration: 1.5,
				stagger: 0.3,
				ease: 'power3.out'
			}
		)
		
		// animation gsap text
		gsap.fromTo(
			'.recleaner__text',
			{x: '100vw', opacity: 0},
			{x: '0', opacity: 1, duration: 1.5, ease: 'power3.out'}
		)
	}, [])
	
	const advantagesList = [
		{id: 1, description: 'Ваши данные находятся под полной защитой', image: defense},
		{id: 2, description: 'Лучшая защита. Клиент ни разу не был взломан за все время', image: security},
		{id: 3, description: 'Частые обновление. Наш клиент обновляется регулярно', image: update},
		{id: 4, description: 'Красивы визуалы, которые привлекают внимание', image: visual},
	];
	
	return (
		<>
			<div className="recleaner__bg"></div>
			<div className="recleaner__header">
				<div className="header__container container">
					<div className="recleaner__logo">
						<img src={logo} alt="logo" className="logo__img"/>
						<NavLink to={'/recleaner'} className={'logo'}>RECLEANER</NavLink>
					</div>
					<div className="recleaner__social" id="social">
						{recleanerList.map((item) => (
							<div key={item.id} className="recleaner__item">
								<NavLink to={item.href} rel="noopener noreferrer">
									<img src={item.image} alt={item.title}
									     className="recleaner__item-img"/>
								</NavLink>
							</div>
						))}
					</div>
				</div>
			</div>
			<section className="recleaner">
				<div className="recleaner__container container">
					<div className="recleaner__content">
						<div className="recleaner__content-image">
							<img src={recleaner1} alt=""/>
							<img src={recleaner2} alt=""/>
							<img src={recleaner3} alt=""/>
						</div>
						<div className="recleaner__contents">
							<div className="recleaner__logo">
								<img src={logo} alt="logo" className="recleaner__logo-img"/>
								<h6 className="recleaner__title">RECLEANER</h6>
							</div>
							<span className="recleaner__subtitle">
							101 проблема - 1 решение
						</span>
							<p className="recleaner__text">
								Портативная программа для быстрой <br/>
								настройки системы, обширным магазином <br/>
								приложений, очистки мусора и многое другое!
							</p>
							<p className="recleaner__text">
								Забудьте о волнениях по поводу свободного <br/>
								места на диске, утечек оперативной памяти и <br/>
								мониторинга ваших действий Windows!
							</p>
							<div className="recleaner__user">
								<button onClick={incrementUserCount} className="recleaner__btn">
									<a href="#" className="recleaner__link">Скачать</a>
								</button>
								<span
									className="recleaner__count">Скачали {userCount} раз(а)</span>
							</div>
						</div>
					</div>
					<div className="recleaner__advantages">
						<ul className="advantages__list">
							{advantagesList.map(item => (
								<li key={item.id} className="advantages__item">
									<img src={item.image} alt="" className="advantages__img"/>
									<p className="advantages__text">{item.description}</p>
								</li>
							))}
						</ul>
					</div>
				</div>
			</section>
		</>
	)
}

export default Recleaner