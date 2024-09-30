import React, {useState, useEffect} from 'react'
import {ref, set, get, child} from 'firebase/database'
import {database} from '../../../firebaseConfig'
import Header from '../../components/Header/Header.jsx'
import logo from '../../assets/images/recleanerLogo.jpg'
import vk from '../../assets/icons/vk.svg'
import github from '../../assets/icons/github.svg'
import discord from '../../assets/icons/discord.svg'
import './_Recleaner.scss'

const Recleaner = () => {
	const [userCount, setUserCount] = useState(0)
	
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
		{
			id: 1,
			title: 'Discord',
			image: discord,
			href: 'https://discord.gg/6muVyCHYsZ'
		},
		{
			id: 2,
			title: 'GitHub',
			image: github,
			href: 'https://github.com/changelog-download'
		},
		{id: 3, title: 'VK', image: vk, href: 'https://vk.com/recleaner_official'}
	]
	
	return (
		<>
			<Header/>
			<section className="recleaner">
				<div className="recleaner__social">
					<ul className="recleaner__list">
						{recleanerList.map((item) => (
							<li className={'recleaner__item'} key={item.id}>
								<a href={item.href} target={'_blank'}>
									<img className={'recleaner__social-img'} src={item.image}
									     alt={item.title} width={'40px'}/>
								</a>
							</li>
						))}
					</ul>
				</div>
				<div className="recleaner__container container">
					<div className="recleaner__title">
						<img src={logo} alt="recleaner" className="recleaner__img"/>
						<h6>RECLEANER</h6>
					</div>
					<p className="recleaner__text">
						Удобная программа для чистки мусора, быстрой <br/>
						оптимизации Windows с повышением FPS и понижением задержек.
					</p>
					<div className="recleaner__users">
						<button onClick={incrementUserCount} className="recleaner__btn">
							<a href="#" className="recleaner__link pulse">Скачать</a>
						</button>
						<span className="users__text">{userCount} пользователей</span>
					</div>
				</div>
			</section>
		</>
	)
}

export default Recleaner