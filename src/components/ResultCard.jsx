import PropTypes from "prop-types";

import {
	FaCheckCircle,
	FaExclamationCircle,
	FaTimesCircle,
} from "react-icons/fa"; // Import additional icons
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
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
export default ResultCard;
