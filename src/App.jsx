import React from 'react';
import Home from './pages/Home/Home.jsx';
import Buy from './pages/Buy/Buy.jsx';
import SoftWare from './pages/SoftWare/SoftWare.jsx';
import Recleaner from './pages/Recleaner/Recleaner.jsx';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './scss/style.scss';

const App = () => {
	const location = useLocation();
	
	return (
		<TransitionGroup>
			<CSSTransition key={location.key} classNames="page" timeout={1200}>
				<Routes location={location}>
					<Route path='/' element={<Home />} />
					<Route path='/buy' element={<Buy />} />
					<Route path='/software' element={<SoftWare />} />
					<Route path='/recleaner' element={<Recleaner />} />
				</Routes>
			</CSSTransition>
		</TransitionGroup>
	);
};

const Main = () => (
	<BrowserRouter basename={'/clean-tweaking'}>
		<App />
	</BrowserRouter>
);

export default Main;
