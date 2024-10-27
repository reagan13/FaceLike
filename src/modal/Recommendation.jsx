import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
	FaRegLaughBeam as FaLips,
	FaRegGrin as FaFaceSmile,
	FaRegSadTear as FaPaw,
	FaRegEye as FaEye,
	FaMale,
} from "react-icons/fa";

const facialFeatures = [
	{
		name: "Lips",
		icon: <FaLips className="text-purple-500" />,
		recommendation: [
			"Apply a nourishing lip balm every morning and night.",
			"Exfoliate your lips once a week with a lip scrub.",
			"Stay hydrated by drinking plenty of water throughout the day.",
		],
		description:
			"Dry lips can lead to discomfort and a dull appearance. It's important to keep them hydrated and smooth for a healthier look.",
	},
	{
		name: "Cheeks",
		icon: <FaFaceSmile className="text-pink-400" />,
		recommendation: [
			"Use a moisturizing blush to add color and glow.",
			"Apply a highlighter on the cheekbones for extra radiance.",
			"Consider facial massages to enhance blood circulation.",
		],
		description:
			"Well-defined cheeks enhance your facial structure. Using the right products can make your cheeks look vibrant and youthful.",
	},
	{
		name: "Pores",
		icon: <FaPaw className="text-blue-500" />,
		recommendation: [
			"Use a clay mask twice a week to absorb excess oil.",
			"Cleanse your face daily with a gentle exfoliator.",
			"Moisturize regularly to maintain a healthy skin barrier.",
		],
		description:
			"Large pores can detract from a smooth complexion. With consistent care, you can minimize their appearance and achieve a refined look.",
	},
	{
		name: "Eyes",
		icon: <FaEye className="text-blue-400" />,
		recommendation: [
			"Apply an eye cream with caffeine to reduce puffiness.",
			"Use a cooling eye mask for 10-15 minutes to soothe tired eyes.",
			"Ensure you get at least 7-8 hours of sleep each night.",
		],
		description:
			"Puffy eyes can be a result of stress or lack of sleep. Proper care can brighten your eye area and make you look more refreshed.",
	},
	{
		name: "Beard",
		icon: <FaMale className="text-brown-600" />,
		recommendation: [
			"Trim your beard every 2-4 weeks to maintain shape.",
			"Use beard oil daily to keep the hair and skin moisturized.",
			"Brush your beard regularly to distribute oils evenly.",
		],
		description:
			"A well-groomed beard can enhance your overall appearance. Regular maintenance will keep it looking neat and stylish.",
	},
];

const Recommendation = ({ isOpen, onClose }) => {
	const [selectedFeature, setSelectedFeature] = useState(null);

	useEffect(() => {
		if (isOpen) {
			document.body.classList.add("overflow-hidden");
		} else {
			document.body.classList.remove("overflow-hidden");
		}

		const handleKeyDown = (event) => {
			if (event.key === "Escape") {
				onClose();
			}
		};

		document.addEventListener("keydown", handleKeyDown);

		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [isOpen, onClose]);

	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto">
			<div
				className="fixed inset-0 bg-black opacity-80 backdrop-blur-sm"
				aria-hidden="true"
			></div>
			<div className="relative p-4 w-full max-w-5xl max-h-full z-50">
				<div className="relative bg-black text-white rounded-lg shadow-lg">
					<h3 className="text-3xl font-extrabold text-center p-6 border-b border-gray-800">
						Improve Your Beauty
					</h3>
					<div className="flex p-4">
						<div className="w-1/3 border-r border-gray-800 pr-4">
							<h4 className="text-2xl font-semibold mb-4">Facial Features</h4>
							{facialFeatures.map((feature) => (
								<div
									key={feature.name}
									className={`flex items-center cursor-pointer hover:bg-gray-700 p-3 rounded transition mb-2 ${
										selectedFeature === feature
											? "bg-gray-800 border border-purple-600"
											: ""
									}`}
									onClick={() => setSelectedFeature(feature)}
								>
									<div className="mr-3 text-3xl">{feature.icon}</div>
									<span className="font-medium text-lg">{feature.name}</span>
								</div>
							))}
						</div>
						<div className="w-2/3 pl-4">
							<h4 className="text-2xl font-semibold mb-4">Recommendations</h4>
							{selectedFeature ? (
								<div className="border border-gray-800 p-4 rounded-lg bg-gray-900 shadow-sm">
									<h5 className="text-xl font-semibold mb-2">
										{selectedFeature.name}
									</h5>
									<p className="text-gray-300 mb-2">
										{selectedFeature.description}
									</p>
									<ul className="list-disc list-inside">
										{selectedFeature.recommendation.map((step, index) => (
											<li key={index} className="text-gray-200 mb-1 text-base">
												{step}
											</li>
										))}
									</ul>
								</div>
							) : (
								<p className="text-gray-400">
									Select a facial feature to see recommendations.
								</p>
							)}
						</div>
					</div>
					<div className="flex justify-end p-4 border-t border-gray-800">
						<button
							onClick={onClose}
							type="button"
							className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5"
						>
							Close
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

Recommendation.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
};

export default Recommendation;
