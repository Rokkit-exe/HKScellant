/** @format */

import { BrowserRouter as Router, Routes, Route } from '../../hkscellant/node_modules/react-router-dom/dist'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Sub from './pages/Sub'

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/about' element={<About />} />
				<Route path='/soumission' element={<Sub />} />
			</Routes>
		</Router>
	)
}

export default App
