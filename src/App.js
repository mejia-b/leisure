import Logo from './assets/images/Icon_Fill_Buildings.svg';

function App() {
	return (
		<div className="bg-cover bg-center w-full h-screen bg-[url('./assets/images/background.png')]">
			<div className='flex bg-white bg-opacity-70 shadow border py-5 px-8'>
				<p className="ml-2 text-3xl text-[#331684] font-['GeneralSans-Semibold']">
					<img src={Logo} alt='logo' /> ResortsOnChain
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
