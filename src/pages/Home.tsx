/** @format */

import React from 'react'
import MainContainer from '../components/MainContainer'
import Header from '../components/Header'
import Footer from '../components/Footer'
import karel1 from '../karel/karel1.png'
import karel2 from '../karel/karel2.jpeg'
import { NavLink } from 'react-router-dom'

const Home = () => {
	const image = 'https://www.maisons-mca.com/wp-content/uploads/constructeur-de-maison-ce-qu-il-faut-savoir-1.jpg'
	return (
		<MainContainer>
			<Header />
			<div className='container'>
				<div className='row  my-4'>
					<div className='col '>
						<h1 className=''>Scellant à penis</h1>
						<p>Nous oeuvrons dans le domaine du scellant depuis 2 jours et le marcher est a nous</p>
						<p>Nous utilisons du scellant de haute performance, ton penis ne se décolera plus jamais </p>
						<p>Bin coller dans tes boxer et à ton scrotum</p>
						<p>notre service est garantie, ca décole ? On recole en double</p>
						<div className='my-4 d-flex flex row'>
							<h5>soumission selon la groseur du Zgeg </h5>
							<NavLink className='btn rounded bg-yellow w-50 border border-dark' to='/soumission'>
								<i className='bi bi-receipt'></i> Soumission
							</NavLink>
						</div>
					</div>
					<div className='d-flex flex-row  overflow-scroll rounded col border border-dark border-2'>
						<img src={karel1} alt='constructeux logo' className='image-size rounded' />
						<img src={karel2} alt='constructeux logo' className='image-size rounded' />
						<img src={karel1} alt='constructeux logo' className='image-size rounded' />
						<img src={karel2} alt='constructeux logo' className='image-size rounded' />
						<img src={karel1} alt='constructeux logo' className='image-size rounded' />
						<img src={karel2} alt='constructeux logo' className='image-size rounded' />
						<img src={karel1} alt='constructeux logo' className='image-size rounded' />
					</div>
				</div>
				<div className='d-flex justify-content-center'></div>
			</div>
			<Footer />
		</MainContainer>
	)
}

export default Home
