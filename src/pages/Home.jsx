const Home = () => {
	return (
		<div className="bg-black text-white min-h-screen flex flex-col">
			{/* Hero Section */}
			<section className="flex flex-col items-center justify-center text-center py-10 md:py-20">
				<h1 className="text-3xl md:text-5xl font-heading mb-4">
					Discover Your Potential
				</h1>
				<p className="text-base md:text-lg mb-8">
					Unlock insights about your facial features with our AI-powered
					analysis tool.
				</p>
				<a
					href="/upload"
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 md:px-6 rounded transition duration-300"
				>
					Analyze Your Face
				</a>
			</section>

			{/* Features Section */}
			<section className="py-10 md:py-20 px-4">
				<h2 className="text-2xl md:text-3xl font-heading text-center mb-12">
					Features
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
					<div className="bg-gray-800 p-4 md:p-6 rounded-lg">
						<h3 className="text-lg md:text-xl font-semibold mb-4">
							AI-Powered Insights
						</h3>
						<p>
							Get detailed analysis of your facial features with cutting-edge AI
							technology.
						</p>
					</div>
					<div className="bg-gray-800 p-4 md:p-6 rounded-lg">
						<h3 className="text-lg md:text-xl font-semibold mb-4">
							User-Friendly Interface
						</h3>
						<p>
							Easy to navigate with a seamless user experience designed for
							everyone.
						</p>
					</div>
					<div className="bg-gray-800 p-4 md:p-6 rounded-lg">
						<h3 className="text-lg md:text-xl font-semibold mb-4">
							Personalized Recommendations
						</h3>
						<p>
							Receive tailored insights and tips based on your unique facial
							features.
						</p>
					</div>
				</div>
			</section>

			{/* How It Works Section */}
			<section className="py-10 md:py-20 px-4 bg-gray-900">
				<h2 className="text-2xl md:text-3xl font-heading text-center mb-12">
					How It Works
				</h2>
				<div className="text-center">
					<p className="mb-4">1. Upload your photo</p>
					<p className="mb-4">2. Get instant analysis</p>
					<p>3. Explore your insights and recommendations</p>
				</div>
			</section>

			{/* Testimonials Section */}
			<section className="py-10 md:py-20 px-4">
				<h2 className="text-2xl md:text-3xl font-heading text-center mb-12">
					What Our Users Say
				</h2>
				<div className="flex flex-col items-center">
					<blockquote className="italic text-lg mb-4">
						&quot;This app helped me understand my features like never
						before!&quot;
					</blockquote>
					<p>- Satisfied User</p>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-gray-800 text-gray-400 py-4 text-center">
				<p>© 2024 FaceLike. All rights reserved.</p>
			</footer>
		</div>
	);
};

export default Home;
