import React from "react";
import { useLocation } from "react-router-dom";

const ResultCard = ({ label, value }) => (
	<div className="bg-gray-800 text-white rounded-lg shadow-md p-4 flex flex-col items-center">
		<h3 className="text-lg font-semibold">{label}</h3>
		<p className="text-xl font-bold text-blue-400">{value}</p>
	</div>
);

const RevealResultsDemo = () => {
	const location = useLocation();
	const { image } = location.state || {}; // Add a default value to avoid destructuring null

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6">
			{/* Title Section */}
			<h1 className="text-3xl md:text-5xl font-heading mb-4">
				Facial Feature Analysis Results
			</h1>
			<p className="text-lg md:text-xl mb-8 text-center">
				Discover the insights from your facial feature analysis.
			</p>

			{/* Image Section */}
			<img
				src={image}
				alt="Scanned Result"
				className="rounded-full w-32 h-32 mb-6 border-4 border-blue-500 shadow-lg"
			/>

			{/* Results Section */}
			<h2 className="text-2xl font-bold mb-4">Your Results</h2>
			<div className="grid grid-cols-2 gap-4 w-full max-w-md">
				<ResultCard label="Overall" value="85%" />
				<ResultCard label="Potential" value="81%" />
				<ResultCard label="Masculinity" value="78%" />
				<ResultCard label="Skin Quality" value="92%" />
				<ResultCard label="Jawline" value="75%" />
				<ResultCard label="Cheekbones" value="80%" />
			</div>

			{/* Call to Action Section */}
			<div className="flex flex-col items-center mt-8 space-y-4">
				<button className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition shadow-md transform hover:scale-105">
					Get FaceLike Pro
				</button>
				<button className="px-4 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition shadow-md transform hover:scale-105">
					Invite 3 Friends
				</button>
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
