import React from 'react'
import Home from './pages/Home/Home.jsx'
import Buy from './pages/Buy/Buy.jsx'
import SoftWare from './pages/SoftWare/SoftWare.jsx'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Recleaner from './pages/Recleaner/Recleaner.jsx'
import './scss/style.css'

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path={'/'} element={<Home/>}></Route>
				<Route path={'/buy'} element={<Buy/>}></Route>
				<Route path={'/software'} element={<SoftWare/>}></Route>
				<Route path={'/recleaner'} element={<Recleaner/>}></Route>
			</Routes>
		</Router>
	)
}

export default App