import React from 'react';
import Logo from '../assets/images/Icon_Fill_Buildings.svg';
import Walletbtn from './Walletbtn';

function Navbar() {
	return (
		<nav className='relative container mx-auto  p-3'>
			{/* flex container */}
			<div className='flex items-center justify-between'>
				{/* Logo */}
				<div className='pt-2 text-white'>
					<img src={Logo} alt='logo' />
				</div>
				{/* Menu items */}
				<div className='hidden md:flex space-x-16 mt-2 text-white text-2xl'>
					<a href='#'>Featured Stays</a>
					<a href='#'>About Us</a>
					<a href='#'>Get Listed</a>
					<a href='#'>Contact</a>
					<a href='#'>Partners</a>
					<a href='#'>About</a>
				</div>
				<div>
					<Walletbtn />
				</div>
				{/* <p className="ml-2 text-3xl text-[#331684] font-['GeneralSans-Semibold']">
					<img src={Logo} alt='logo' /> ResortsOnChain
				</p> */}
			</div>
		</nav>
	);
}

export default Navbar;
