import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	Tooltip,
	CartesianGrid,
	ResponsiveContainer,
} from "recharts";

// Mock analysis data
const analysisData = [
	{ feature: "Skin Quality", score: 85, date: "2024-10-20" },
	{ feature: "Jawline", score: 75, date: "2024-10-21" },
	{ feature: "Cheekbones", score: 78, date: "2024-10-22" },
	{ feature: "Overall Potential", score: 90, date: "2024-10-23" },
	{ feature: "Masculinity", score: 70, date: "2024-10-24" },
];

// Function to determine color based on score
const getColorByScore = (score) => {
	if (score >= 80) {
		return "text-green-500"; // High score
	} else if (score >= 70) {
		return "text-lime-400"; // Yellow-green for scores 70-79
	} else if (score >= 50) {
		return "text-orange-500"; // Medium score
	} else {
		return "text-red-500"; // Low score
	}
};

const AnalysisReport = () => {
	return (
		<div className="bg-black text-white min-h-screen p-6 sm:p-8">
			<h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-white">
				Face Scan Analysis Report
			</h1>

			{/* Analysis Summary */}
			<div className="bg-gray-900 p-6 rounded-lg mb-8 shadow-lg">
				<h2 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-300">
					Analysis Summary
				</h2>
				<p className="text-sm sm:text-base text-gray-400">
					Your facial analysis shows promising results across various features.
					The following insights provide a comprehensive overview of your facial
					characteristics.
				</p>
			</div>

			{/* Graph Section */}
			<div className="mb-8">
				<h2 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-gray-300">
					Feature Scores Over Time
				</h2>
				<ResponsiveContainer width="100%" height={300}>
					<LineChart data={analysisData}>
						<CartesianGrid strokeDasharray="3 3" stroke="#444" />
						<XAxis dataKey="date" stroke="#888" />
						<YAxis stroke="#888" />
						<Tooltip
							contentStyle={{ backgroundColor: "#333", borderColor: "#444" }}
						/>
						<Line type="monotone" dataKey="score" stroke="#888" />
					</LineChart>
				</ResponsiveContainer>
			</div>

			{/* Detailed Analysis */}
			<h2 className="text-xl sm:text-2xl font-semibold mt-10 mb-4 text-center text-gray-300">
				Detailed Analysis
			</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
				{analysisData.map((item, index) => (
					<div
						key={index}
						className="bg-gray-900 p-4 rounded-lg shadow-md transform transition-transform hover:scale-105"
					>
						<h3 className="text-lg sm:text-xl font-semibold text-gray-200">
							{item.feature}
						</h3>
						<p className="text-base text-gray-300">
							Score:{" "}
							<span className={`font-bold ${getColorByScore(item.score)}`}>
								{item.score}%
							</span>
						</p>
						<p className="text-sm text-gray-500">Date: {item.date}</p>
						<p className="text-sm text-gray-400">
							{item.score >= 80
								? "🌟 You have excellent features in this category. Keep it up!"
								: item.score >= 70
								? "⚠️ You have good features in this category. Maintain your routine."
								: item.score >= 50
								? "⚠️ You have average features in this category. Consider improvements."
								: "❗ This category needs improvement. Don’t be discouraged!"}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default AnalysisReport;
