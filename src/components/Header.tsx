/** @format */

import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../logo.jpeg'

function Header() {
	return (
		<nav className='navbar-expand navbar-dark bg-dark d-flex flex-row justify-content-center border-yellow p-4'>
			<div>
				<NavLink className='navbar-brand' to='/'>
					<img src={logo} alt='code folder image' className='mx-3 logo-size-header' />
				</NavLink>
			</div>
			{/* collapse navbar-collapse */}
			<div className=' d-flex mx-3 header-text'>
				<ul className='navbar-nav mr-auto'>
					<li className='nav-item active mx-3'>
						<NavLink className='nav-link' to='/'>
							<i className='bi bi-house me-1'></i> Home
						</NavLink>
					</li>
					<li className='nav-item mx-3'>
						<NavLink className='nav-link' to='/contact'>
							<i className='bi bi-person me-1'></i> Contact
						</NavLink>
					</li>
					<li className='nav-item mx-3'>
						<NavLink className='nav-link' to='/about'>
							<i className='bi bi-file-person me-1'></i> About
						</NavLink>
					</li>
					<li className='nav-item mx-3'>
						<NavLink className='nav-link' to='/soumission'>
							<i className='bi bi-receipt'></i> Soumission
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Header
