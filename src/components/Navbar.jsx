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
					<div className='text-white flex align-left'>ResortsOnChain</div>
				</div>

				{/* Menu items */}
				<div className='hidden md:flex space-x-16 mt-2 text-[#BE90F7] text-2xl'>
					<a href='#' className='hover:text-white hover:font-bold'>
						Featured Stays
					</a>
					<a href='#' className='hover:text-white hover:font-bold'>
						Get Listed
					</a>
					<a href='#' className='hover:text-white hover:font-bold'>
						Roadmap
					</a>
					<a href='#' className='hover:text-white hover:font-bold'>
						Partners
					</a>
					<a href='#' className='hover:text-white hover:font-bold'>
						Contact
					</a>
					<a href='#' className='hover:text-white hover:font-bold'>
						FAQ
					</a>
				</div>
				<div>
					<Walletbtn />
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
