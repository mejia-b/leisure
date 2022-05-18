import Navbar from './components/Navbar';
import Walletbtn from './components/Walletbtn';

function App() {
	return (
		<div className="bg-cover bg-center w-full h-screen bg-[url('./assets/images/background.png')]">
			<Navbar />
			<div className='flex bg-white bg-opacity-30 shadow  py-5 px-8'></div>

			<section id='hero'>
				<div className='container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0'>
					<div className='flex flex-col mb-32 space-y-4 md:w-1/2'>
						<h1 className='max-w-md text-4xl font-bold text-[#000] text-center md:text-5xl md:text-left'>
							Your next stay is only a few clicks away!
						</h1>
						<p className='max-w-sm text-center text-[#fff] md:text-left'>
							Simply connect your wallet to get started!
							<div className='mt-2'>
								<Walletbtn />
							</div>
						</p>
					</div>

					<div></div>
				</div>
			</section>

			<div className='p-8'>
				<p className='text-[#F9F8FF] text-lg'>
					This page is currently under construction! Check back later for more
					updates!
				</p>
			</div>
		</div>
	);
}
export default App;
