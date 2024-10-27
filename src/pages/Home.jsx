import { Link } from "react-router-dom";
import { FaRobot, FaUserFriends, FaLightbulb, FaSmile } from "react-icons/fa";

const Home = () => {
	return (
		<div className="bg-black text-white font-sans">
			{/* Hero Section */}
			<section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black to-gray-900 text-center px-4">
				<h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
					FaceLike
				</h1>
				<p className="text-lg md:text-2xl max-w-lg mx-auto mb-8 text-gray-300">
					Unlock insights about your facial features with our AI-powered
					analysis tool.
				</p>

				<Link
					to="/scan"
					className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300"
				>
					Analyze Your Face
				</Link>
			</section>

			{/* Features Section */}
			<section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black px-6">
				<h2 className="text-3xl md:text-4xl font-bold mb-12">Our Features</h2>
				<p className="text-gray-400 text-center mb-8 max-w-xl">
					Explore the unique features FaceLike has to offer. Each tool is
					designed to provide insightful, user-friendly experiences tailored to
					your needs.
				</p>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
					<div className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300">
						<FaRobot className="text-4xl text-blue-400 mb-3" />
						<h3 className="text-xl font-semibold text-blue-400 mb-3">
							AI-Powered Insights
						</h3>
						<p className="text-gray-300">
							Our advanced AI technology analyzes your facial features in
							detail, providing you with comprehensive insights into your unique
							attributes.
						</p>
					</div>
					<div className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300">
						<FaUserFriends className="text-4xl text-blue-400 mb-3" />
						<h3 className="text-xl font-semibold text-blue-400 mb-3">
							User-Friendly Interface
						</h3>
						<p className="text-gray-300">
							Navigating FaceLike is a breeze, designed with you in mind. Our
							intuitive layout ensures a seamless experience from start to
							finish.
						</p>
					</div>
					<div className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300">
						<FaLightbulb className="text-4xl text-blue-400 mb-3" />
						<h3 className="text-xl font-semibold text-blue-400 mb-3">
							Personalized Recommendations
						</h3>
						<p className="text-gray-300">
							Receive tailored insights and tips based on your unique facial
							features, helping you enhance your natural beauty.
						</p>
					</div>
				</div>
			</section>

			{/* How It Works Section */}
			<section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black to-gray-900 px-6 text-center">
				<h2 className="text-3xl md:text-4xl font-bold mb-12">How It Works</h2>
				<p className="text-gray-400 mb-6 max-w-xl">
					Follow these simple steps to unlock your facial analysis:
				</p>
				<div className="space-y-6 text-gray-300">
					<p className="flex items-center justify-center space-x-2">
						<span className="text-2xl font-bold text-blue-500">1.</span>
						<span>Upload your photo using our easy upload feature.</span>
					</p>
					<p className="flex items-center justify-center space-x-2">
						<span className="text-2xl font-bold text-blue-500">2.</span>
						<span>
							Our AI processes the image and provides instant analysis.
						</span>
					</p>
					<p className="flex items-center justify-center space-x-2">
						<span className="text-2xl font-bold text-blue-500">3.</span>
						<span>
							Explore your insights, recommendations, and share with friends!
						</span>
					</p>
				</div>
			</section>

			{/* Testimonials Section */}
			<section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black px-6">
				<h2 className="text-3xl md:text-4xl font-bold mb-12">
					What Our Users Say
				</h2>
				<div className="bg-gray-800 p-8 rounded-lg max-w-lg mx-auto shadow-lg text-center">
					<blockquote className="italic text-lg text-gray-300 mb-4">
						&quot;FaceLike transformed the way I see my features! The analysis
						was spot on and the recommendations helped me a lot!&quot;
					</blockquote>
					<p className="text-blue-400 font-semibold">- John D.</p>
				</div>
				<div className="bg-gray-800 p-8 rounded-lg max-w-lg mx-auto shadow-lg text-center mt-4">
					<blockquote className="italic text-lg text-gray-300 mb-4">
						&quot;I love how easy it is to use FaceLike. The insights are super
						helpful and the interface is very intuitive!&quot;
					</blockquote>
					<p className="text-blue-400 font-semibold">- Sarah K.</p>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-gray-800 text-gray-400 py-6 text-center">
				<p>© 2024 FaceLike. All rights reserved.</p>
			</footer>
		</div>
	);
};

export default Home;
