function App() {
	return (
		<div className="bg-cover bg-center w-full h-screen bg-[url('./assets/images/background.png')]">
			<div className='flex bg-white bg-opacity-70 shadow border py-5 px-8'>
				<svg className='text-[#331684] fill-current w-10 h-10 pt-[3px]'>
					<path d='M30 25.9999H28V14.4374C28.0007 14.1586 27.942 13.8828 27.8277 13.6285C27.7135 13.3742 27.5464 13.1471 27.3375 12.9624L17.3375 3.8749C16.9709 3.53847 16.4914 3.35181 15.9937 3.35181C15.4961 3.35181 15.0166 3.53847 14.65 3.8749L4.65 12.9624C4.44526 13.1497 4.28173 13.3776 4.16983 13.6315C4.05792 13.8855 4.00009 14.1599 4 14.4374V25.9999H2C1.73478 25.9999 1.48043 26.1053 1.29289 26.2928C1.10536 26.4803 1 26.7347 1 26.9999C1 27.2651 1.10536 27.5195 1.29289 27.707C1.48043 27.8945 1.73478 27.9999 2 27.9999H30C30.2652 27.9999 30.5196 27.8945 30.7071 27.707C30.8946 27.5195 31 27.2651 31 26.9999C31 26.7347 30.8946 26.4803 30.7071 26.2928C30.5196 26.1053 30.2652 25.9999 30 25.9999ZM19 25.9999H13V19.9999C13 19.7347 13.1054 19.4803 13.2929 19.2928C13.4804 19.1053 13.7348 18.9999 14 18.9999H18C18.2652 18.9999 18.5196 19.1053 18.7071 19.2928C18.8946 19.4803 19 19.7347 19 19.9999V25.9999Z' />
				</svg>
				<p className="ml-2 text-3xl text-[#331684] font-['GeneralSans-Semibold']">
					ResortsOnChain
				</p>
			</div>

			<div className='p-8'>
				<p className='text-[#F9F8FF] text-lg'>
					This page is currently under construction!
					<button class='bg-[#8247e5] hover:bg-[#4A23A4] text-white font-regular py-4 px-8 shadow'>
						Connect Wallet
					</button>
				</p>
			</div>
		</div>
	);
}
export default App;
