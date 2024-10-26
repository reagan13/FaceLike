import Men from "..//assets/face.png";

const Scan = () => {
	return (
		<div className="bg-black text-white min-h-screen flex flex-col">
			{/* Title Section */}
			<section className="flex flex-col items-center justify-center text-center pt-14 pb-5">
				<h1 className="text-4xl md:text-6xl font-heading mb-4">
					Facial Feature Analysis
				</h1>
				<p className="text-lg md:text-xl mb-8">
					Unlock the secrets of your facial features with our AI-powered
					analysis tool.
				</p>
			</section>

			{/* Image Section */}
			<section className="flex flex-col items-center mb-20 gap-10">
				<img
					src={Men} // Replace with your actual image source
					alt="Facial Analysis"
					className="rounded-lg shadow-lg mb-4 h-96 w-auto" // Adjust height for portrait
				/>
				<button
					onClick={() => console.log("Scan Started")} // Replace with your scan function
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition duration-300"
				>
					Begin Scan
				</button>
			</section>

			{/* Description Section */}
			<section className="px-4 py-20">
				<h2 className="text-3xl md:text-4xl font-heading text-center mb-12">
					How It Works
				</h2>
				<p className="text-center mb-4">
					Our advanced AI technology analyzes various aspects of your facial
					features to provide you with insights and recommendations tailored to
					you.
				</p>
				<p className="text-center">
					Whether it&apos; improving your skincare routine or enhancing your
					features, our tool is here to help you discover your true potential.
				</p>
			</section>

			{/* Footer */}
			<footer className="bg-gray-800 text-gray-400 py-6 text-center">
				<p>© 2024 YourAppName. All rights reserved.</p>
			</footer>
		</div>
	);
};

export default Scan;
