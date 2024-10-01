import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.jsx'
import Buy from './pages/Buy/Buy.jsx'
import SoftWare from './pages/SoftWare/SoftWare.jsx'
import Recleaner from './pages/Recleaner/Recleaner.jsx'
import './scss/style.css'

const App = () => {
	return (
		<Router basename='/clean-tweaking'>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/buy' element={<Buy />} />
				<Route path='/software' element={<SoftWare />} />
				<Route path='/recleaner' element={<Recleaner />} />
			</Routes>
		</Router>
	)
}

export default App