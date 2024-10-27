import { useLocation } from "react-router-dom";
import {
	FaEye,
	FaSmile,
	FaSkullCrossbones,
	FaHeart,
	FaHandRock,
} from "react-icons/fa";
import FeatureCard from "../components/FeatureCard"; // Adjust the import path as necessary
import ResultCard from "../components/ResultCard"; // Adjust the import path as necessary
import { useState } from "react";
import Recommendation from "../modal/Recommendation";
const RevealResultsDemo = () => {
	const location = useLocation();
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};
	const { image } = location.state || {}; // Add a default value to avoid destructuring null
	return (
		<div className="flex flex-col items-center justify-center  min-h-screen bg-black text-white p-6">
			{/* Title Section */}
			<h1 className="text-2xl md:text-5xl font-heading mb-4 ">
				Facial Feature Analysis Results
			</h1>
			<p className="text-lg md:text-xl mb-8 text-center">
				Discover the insights from your facial feature analysis.
			</p>
			<img
				src={image}
				alt="Scanned Result"
				className="rounded-full w-32 h-32 mb-6 border-4 border-blue-500 shadow-lg"
			/>
			<div className="flex flex-col md:flex-row justify-center w-full px-10">
				{/* Conditional Rendering for Image and Results */}
				{image ? (
					<>
						{/* Left Side: Image Section */}
						<div className="flex flex-col  py-2 items-center justify-center md:w-1/3  shadow-md rounded-lg">
							{/* Results Section */}
							<h2 className="text-3xl font-bold">Your Results</h2>
							<div className="grid grid-cols-2 gap-4 pt-2 w-full max-w-md">
								<ResultCard label="Overall" value="85" /> {/* Green */}
								<ResultCard label="Potential" value="65" /> {/* Yellow */}
								<ResultCard label="Masculinity" value="45" /> {/* Orange */}
								<ResultCard label="Skin Quality" value="92" /> {/* Green */}
								<ResultCard label="Jawline" value="30" /> {/* Red */}
								<ResultCard label="Cheekbones" value="50" /> {/* Yellow */}
							</div>
						</div>

						{/* Right Side: Detailed Analysis Section */}
						<div className="md:w-2/3 mt-8 md:mt-0 md:pl-6  ">
							<div className="flex  items-center justify-between py-2">
								<h2 className="text-3xl font-bold">Detailed Analysis</h2>
								<div className="flex">
									{/* Button to open modal */}
									<button
										onClick={openModal}
										className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:from-blue-600 hover:to-purple-700 transition shadow-md transform hover:scale-105"
									>
										Improve your Beauty
									</button>
									{/* Recommendation Modal */}
									<Recommendation isOpen={isModalOpen} onClose={closeModal} />
								</div>
							</div>
							{/* Grid for Detailed Facial Extraction Features */}
							<div className="grid grid-cols-3 gap-4">
								<FeatureCard
									icon={<FaEye className="text-blue-400" />}
									feature="Eye Color"
									value="Blue"
								/>
								<FeatureCard
									icon={<FaSmile className="text-yellow-300" />}
									feature="Skin Type"
									value="Oily"
								/>
								<FeatureCard
									icon={<FaSkullCrossbones className="text-red-400" />}
									feature="Nose Shape"
									value="Straight"
								/>
								<FeatureCard
									icon={<FaHeart className="text-pink-500" />}
									feature="Lips"
									value="Full"
								/>
								<FeatureCard
									icon={<FaHandRock className="text-green-400" />}
									feature="Forehead"
									value="Broad"
								/>
								<FeatureCard
									icon={<FaSmile className="text-yellow-300" />}
									feature="Smile Width"
									value="Medium"
								/>
								<FeatureCard
									icon={<FaEye className="text-blue-400" />}
									feature="Eyebrow Shape"
									value="Arched"
								/>
								<FeatureCard
									icon={<FaHeart className="text-pink-500" />}
									feature="Chin Shape"
									value="Pointed"
								/>
								<FeatureCard
									icon={<FaSkullCrossbones className="text-red-400" />}
									feature="Face Shape"
									value="Oval"
								/>
								<FeatureCard
									icon={<FaHandRock className="text-green-400" />}
									feature="Pore Size"
									value="Small"
								/>
								<FeatureCard
									icon={<FaSmile className="text-yellow-300" />}
									feature="Complexion"
									value="Clear"
								/>
								<FeatureCard
									icon={<FaEye className="text-blue-400" />}
									feature="Eyelash Length"
									value="Long"
								/>
							</div>
						</div>
					</>
				) : (
					<div className="text-center my-20  ">
						<p className="text-xl font-semibold text-red-500">
							Please scan your face to get analysis results.
						</p>
					</div>
				)}
			</div>

			{/* Free Trial Notification */}
			<div className="mt-6 p-4 bg-gray-800 rounded text-center shadow-lg">
				<p className="font-semibold text-blue-400">
					🌟 Free Trial Available! 🌟
				</p>
				<p>Unlock premium features and enhance your results.</p>
			</div>

			{/* Footer */}
			<footer className="mt-8 text-gray-500 text-sm">
				<p>© 2024 YourAppName. All rights reserved.</p>
			</footer>
		</div>
	);
};

export default RevealResultsDemo;
