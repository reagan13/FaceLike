import React from "react";
import { useLocation } from "react-router-dom";

import PropTypes from "prop-types";
import {
	FaCheckCircle,
	FaExclamationCircle,
	FaTimesCircle,
} from "react-icons/fa";

const ResultCard = ({ label, value }) => {
	const percentage = parseInt(value, 10);

	// Determine color and icon based on percentage
	const getColor = (percentage) => {
		if (percentage >= 75) return "text-green-400 border-green-400";
		if (percentage >= 50) return "text-yellow-300 border-yellow-300";
		if (percentage >= 25) return "text-orange-400 border-orange-400";
		return "text-red-400 border-red-400";
	};

	const getIcon = (percentage) => {
		if (percentage >= 75) return <FaCheckCircle className="text-green-400" />;
		if (percentage >= 50)
			return <FaExclamationCircle className="text-yellow-300" />;
		return <FaTimesCircle className="text-red-400" />;
	};

	return (
		<div className="flex flex-col justify-center bg-gray-800 text-white rounded-md shadow-md p-4 w-48 m-2">
			<h3 className="text-base font-semibold mb-1">{label}</h3>
			<div className="flex items-center">
				{/* Icon */}
				<div className="mr-3 text-2xl">{getIcon(percentage)}</div>

				{/* Text and Progress */}
				<div className="flex flex-col w-full">
					<p className={`text-md font-bold mb-1 ${getColor(percentage)}`}>
						{value}%
					</p>
					<div className="w-full bg-gray-700 rounded-full h-1.5 mt-1">
						<div
							className={`h-1.5 rounded-full ${
								getColor(percentage).split(" ")[0]
							}`}
							style={{ width: `${percentage}%` }}
						></div>
					</div>
				</div>
			</div>
		</div>
	);
};

ResultCard.propTypes = {
	label: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
};

const RevealResultsDemo = () => {
	const location = useLocation();
	const { image } = location.state || {}; // Add a default value to avoid destructuring null
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6">
			{/* Title Section */}
			<h1 className="text-2xl md:text-5xl font-heading mb-4">
				Facial Feature Analysis Results
			</h1>
			<p className="text-lg md:text-xl mb-8 text-center">
				Discover the insights from your facial feature analysis.
			</p>

			{/* Conditional Rendering */}
			{image ? (
				<>
					{/* Image Section */}
					<img
						src={image}
						alt="Scanned Result"
						className="rounded-full w-32 h-32 mb-6 border-4 border-blue-500 shadow-lg"
					/>

					{/* Results Section */}
					<h2 className="text-2xl font-bold mb-4">Your Results</h2>
					<div className="grid grid-cols-2 gap-4 w-full max-w-md">
						<ResultCard label="Overall" value="85" /> {/* Green */}
						<ResultCard label="Potential" value="65" /> {/* Yellow */}
						<ResultCard label="Masculinity" value="45" /> {/* Orange */}
						<ResultCard label="Skin Quality" value="92" /> {/* Green */}
						<ResultCard label="Jawline" value="30" /> {/* Red */}
						<ResultCard label="Cheekbones" value="50" /> {/* Yellow */}
					</div>
					{/* Call to Action Section */}
					<div className="flex flex-col items-center mt-8 space-y-4">
						<div className="pb-4">
							<button className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition shadow-md transform hover:scale-105">
								Save this to Profile
							</button>
						</div>
						<div className="flex gap-6">
							<button className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition shadow-md transform hover:scale-105">
								Get FaceLike Pro
							</button>
							<button className="px-4 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition shadow-md transform hover:scale-105">
								Invite 3 Friends
							</button>
						</div>
						<p className="text-sm text-gray-400 mt-2">
							You only have 3 remaining free scans.
						</p>
					</div>
				</>
			) : (
				<div className="text-center my-20">
					<p className="text-xl font-semibold text-red-500">
						Please scan your face to get analysis results.
					</p>
				</div>
			)}

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
