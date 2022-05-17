import Navbar from './components/Navbar';
import Walletbtn from './components/Walletbtn';

function App() {
	return (
		<div className="bg-cover bg-center w-full h-screen bg-[url('./assets/images/background.png')]">
			<Navbar />
			<div className='flex bg-white bg-opacity-30 shadow  py-5 px-8'></div>

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
