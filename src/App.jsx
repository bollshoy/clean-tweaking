import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Buy from './pages/Buy/Buy.jsx'
import SoftWare from './pages/SoftWare/SoftWare.jsx'
import Recleaner from './pages/Recleaner/Recleaner.jsx'
import './scss/style.css'

const App = () => {
	return (
		<BrowserRouter basename='/clean-tweaking'>
			<Routes>
				<Route path={'/'} element={<Home/>}></Route>
				<Route path={'/buy'} element={<Buy/>}></Route>
				<Route path={'/software'} element={<SoftWare/>}></Route>
				<Route path={'/recleaner'} element={<Recleaner/>}></Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App