import Hero from './components/Hero';
import Nav from './components/Nav';
import Faq from './components/Faq';

function App() {
	return (
		<div className="bg-cover bg-center w-full h-screen bg-[url('./assets/images/background.png')]">
			<Nav />

			<section id='hero'>
				<Hero />
			</section>

			<section id='faq'>
				<Faq />
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
