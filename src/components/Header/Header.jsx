import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import './_Header.scss'

const Header = () => {
	
	const [open, setOpen] = useState(false)
	
	const handleClick = () => {
		setOpen(!open)
	}
	
	return (
		<header className="header">
			<div className="header__container container">
				<div className="header__logo">
					<a href="/" className="logo">CleanTweaking</a>
				</div>
				<nav className="header__menu">
					<div className={`burger ${open ? 'open' : ''}`} onClick={handleClick}>
						<span></span>
						<span></span>
						<span></span>
					</div>
					<ul className={`header__list ${open ? 'open' : ''}`}>
						<li>
							<NavLink to="/" className="header__link">Главная</NavLink>
						</li>
						<li>
							<NavLink to="/recleaner"
							         className="header__link">Recleaner</NavLink>
						</li>
						<li>
							<a href="#footer" className="header__link">Контакты</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Header
