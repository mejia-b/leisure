const faqs = [
	{
		id: 1,
		question: 'How do I make an account?',
		answer:
			"I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
	},
	{
		id: 2,
		question: 'What currency can I pay in?',
		answer:
			'You can pay for your booking(s) in $MATIC. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
	},
	{
		id: 3,
		question: 'What is a random question we can put here?',
		answer:
			'This is a placeholder for now. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
	},
	{
		id: 4,
		question: "Who's that Pokemon?",
		answer:
			"I think that might be Pikachu, but I'm not sure. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
	},
	{
		id: 5,
		question: 'Is this another placeholder question?',
		answer:
			'It might just be that. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
	},
	{
		id: 6,
		question: 'Do we think this is another placeholder?',
		answer:
			'This is another placeholder for now. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
	},
	// More questions...
];

export default function Faq() {
	return (
		<div className='bg-[#8247E5]'>
			<div className='max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
				<h2 className='text-3xl font-extrabold text-white'>
					Frequently asked questions
				</h2>
				<div className='mt-6 border-t border-indigo-300 border-opacity-25 pt-10'>
					<dl className='space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12'>
						{faqs.map((faq) => (
							<div key={faq.id}>
								<dt className='text-lg leading-6 font-medium text-white'>
									{faq.question}
								</dt>
								<dd className='mt-2 text-base text-indigo-200'>{faq.answer}</dd>
							</div>
						))}
					</dl>
				</div>
			</div>
		</div>
	);
}
