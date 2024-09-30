import React from 'react'
import boosty from '../../assets/images/buy/boosty.svg'
import bank from '../../assets/images/buy/bank.svg'
import sbp from '../../assets/images/buy/sbp.svg'
import skins from '../../assets/images/buy/steam.svg'
import avito from '../../assets/icons/avito.svg'
import discord from '../../assets/icons/discord.svg'
import email from '../../assets/icons/email.svg'
import phone from '../../assets/icons/phone.svg'
import telegram from '../../assets/icons/telegram.svg'
import vk from '../../assets/icons/vk.svg'
import {NavLink} from 'react-router-dom'
import './_Buy.scss'

const Buy = () => {
	
	const contentList = [
		{
			id: 1,
			title: 'Avito',
			images: avito,
			link: 'https://www.avito.ru/moskva/predlozheniya_uslug/kompyuternyy_master_2319062307?utm_campaign=native&utm_medium=item_page_android&utm_source=soc_sharing_seller'
		},
		{
			id: 2,
			title: 'Discord',
			images: discord,
			link: 'https://discord.gg/Ea8FuHNuJT'
		},
		{
			id: 3,
			title: 'Email',
			images: email,
			link: 'mailto:gamerboy131964@gmail.com'
		},
		{id: 4, title: 'Phone', images: phone, link: 'tel:+79013364878'},
		{id: 5, title: 'Telegram', images: telegram, link: 'https://t.me/Clean_0K'},
		{id: 6, title: 'VK', images: vk, link: 'https://vk.com/clean_ok69'},
	
	]
	
	return (
		<section className="contentBuy">
			<NavLink to={'/'} className="contentBuy__btn">Назад</NavLink>
			<div className="contentBuy__container container">
				<h6 className="contentBuy__title">Способы оплаты</h6>
				<p className="contentBuy__text">
					Принимаем оплату с Украины, Казахстана, <br/> Беларуси, и прочих стран
				</p>
				<div className="contentBuy__content">
					<div className="contentBuy__item">
						<img src={boosty} alt="boosty" className="contentBuy__img"/>
						<span className="contentBuy__item-title">Boosty</span>
					</div>
					<div className="contentBuy__item">
						<img src={bank} alt="Visa, MasterCard, МИР"
						     className="contentBuy__img"/>
						<span
							className="contentBuy__item-title">Visa, MasterCard, МИР</span>
					</div>
					<div className="contentBuy__item">
						<img src={sbp} alt="СБП" className="contentBuy__img"/>
						<span className="contentBuy__item-title">СБП</span>
					</div>
					<div className="contentBuy__item">
						<img src={skins} alt="СБП" className="contentBuy__img"/>
						<span className="contentBuy__item-title">Скинами</span>
					</div>
				</div>
				<div className="contentBuy__contact">
					<span
						className="contentBuy__contact-title">Для покупки пишите нам:</span>
					{contentList.map((item) => (
						<a key={item.id} href={item.link}
						   className="contentBuy__contact-item" target="_blank"
						   rel="noopener noreferrer">
							<img src={item.images} alt={item.title}/>
							<span>{item.title}</span>
						</a>
					))}
				</div>
			</div>
		</section>
	)
}

export default Buy
