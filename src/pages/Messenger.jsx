const featureDetails = {
	"Improve your overall": {
		description:
			"To improve your overall health, focus on a balanced diet, regular exercise, and staying hydrated.",
		discussion:
			"A balanced lifestyle significantly enhances your quality of life.",
		steps: [
			"Assess Your Current Lifestyle: Identify areas for improvement.",
			"Create a Balanced Meal Plan: Focus on whole foods.",
			"Establish a Workout Routine: Aim for regular physical activity.",
			"Prioritize Sleep: Get adequate rest.",
			"Stay Hydrated: Drink enough water daily.",
		],
		recommendation: "Consider using a fitness app to track your progress.",
	},
	"Gain more muscle": {
		description:
			"Incorporating strength training into your routine is essential for muscle gain.",
		discussion:
			"Aim for compound movements and a high-protein diet to support muscle recovery.",
		steps: [
			"Start with Bodyweight Exercises: Build a foundation before progressing.",
			"Include Compound Movements: Squats, deadlifts, and bench press are essential.",
			"Increase Protein Intake: Aim for 1.2 to 2.2 grams of protein per kg of body weight.",
			"Stay Consistent: Regularly challenge yourself with weights and reps.",
			"Consider Professional Guidance: A coach can help optimize your workout plan.",
		],
		recommendation: "Track your workouts for progress and motivation.",
	},
	"Lose body fat": {
		description:
			"To lose body fat, create a calorie deficit by consuming fewer calories than you burn.",
		discussion: "Combine cardio with strength training for the best results.",
		steps: [
			"Calculate Your Daily Caloric Needs: Use a TDEE calculator.",
			"Monitor Your Food Intake: Track calories and macros to stay on track.",
			"Incorporate Cardio: Aim for at least 150 minutes of moderate aerobic activity weekly.",
			"Strength Train: Build muscle to increase metabolism.",
			"Stay Consistent: Adhere to your plan for sustainable results.",
		],
		recommendation: "Use an app to log your meals and workouts.",
	},
	"Get clear skin": {
		description:
			"Maintain a consistent skincare routine, stay hydrated, and eat foods rich in antioxidants.",
		discussion:
			"Avoid excessive sun exposure and manage stress levels to keep your skin looking fresh and clear.",
		steps: [
			"Cleanse Your Skin: Use a gentle cleanser suitable for your skin type.",
			"Moisturize Daily: Keep your skin hydrated.",
			"Exfoliate Weekly: Remove dead skin cells to promote cell turnover.",
			"Protect Your Skin: Use sunscreen daily to prevent sun damage.",
			"Consult a Dermatologist: Seek professional advice for persistent issues.",
		],
		recommendation:
			"Consider incorporating serums with active ingredients like Vitamin C.",
	},
	"Sharpen your jawline": {
		description:
			"Facial exercises and maintaining a healthy body fat percentage can help define your jawline.",
		discussion: "Consider consulting with a professional for targeted advice.",
		steps: [
			"Practice Facial Exercises: Engage in exercises that target the jaw muscles.",
			"Maintain a Healthy Diet: Avoid excessive salt and sugar.",
			"Stay Hydrated: Drink plenty of water to reduce bloating.",
			"Monitor Body Fat: A lower body fat percentage may improve jawline definition.",
			"Consider Professional Treatments: Options like fillers or Kybella may enhance results.",
		],
		recommendation:
			"Combine exercises with a healthy lifestyle for optimal results.",
	},
};
import { useState } from "react";
import {
	FaUserGraduate,
	FaComments,
	FaArrowRight,
	FaRegHeart,
} from "react-icons/fa";

const Messenger = () => {
	const [showMessenger, setShowMessenger] = useState(false);
	const [selectedFeature, setSelectedFeature] = useState("");
	const [messages, setMessages] = useState([
		{ sender: "coach", text: "Hello! How can I assist you today?" },
		{ sender: "user", text: "I want to improve my overall health." },
		{ sender: "coach", text: "That's great! Let's get started." },
	]);

	const handleCoachClick = () => {
		setShowMessenger(true);
		setSelectedFeature("");
	};

	const handleFeatureClick = (feature) => {
		setSelectedFeature(feature);
		setShowMessenger(false);
	};

	const addMessage = (text, sender) => {
		setMessages((prevMessages) => [...prevMessages, { text, sender }]);
	};

	const handleSendMessage = () => {
		addMessage("Thanks for the tips!", "user");
		addMessage(
			"You're welcome! Let me know if you have more questions.",
			"coach"
		);
	};

	return (
		<div className="flex flex-col md:flex-row h-screen w-full bg-black text-white p-2">
			{/* Left Section: Coach and Features */}
			<div className="w-full md:w-1/3 p-4 bg-black    flex flex-col justify-between">
				{/* Coach Section */}
				<div>
					<h2 className="text-2xl font-bold mb-6 text-white flex items-center">
						<FaUserGraduate className="mr-2 text-purple-500" /> Your Coach
					</h2>
					<div
						className="flex items-center justify-between p-4 rounded-lg bg-gray-800 cursor-pointer hover:bg-purple-700 transition mb-4"
						onClick={handleCoachClick}
					>
						<div className="flex items-center">
							<FaUserGraduate className="w-8 h-8 text-purple-500 mr-4" />
							<span className="font-semibold">Coach Bernard</span>
						</div>
						<FaArrowRight className="text-purple-300" />
					</div>

					{/* Learning Options */}
					<h3 className="text-xl font-semibold mb-2 text-white flex items-center">
						<FaComments className="mr-2 text-blue-500" /> Learn how to ...
					</h3>
					<div className="space-y-2">
						{Object.keys(featureDetails).map((feature) => (
							<div
								key={feature}
								className="flex items-center justify-between p-3 rounded-lg bg-gray-800 cursor-pointer hover:bg-blue-700 transition"
								onClick={() => handleFeatureClick(feature)}
							>
								<span>{feature}</span>
								<FaArrowRight className="text-blue-300" />
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Right Section: Messenger and Feature Details */}
			<div className="w-full md:w-2/3 p-6 bg-black flex flex-col justify-between">
				{showMessenger ? (
					<div className="h-full">
						<h2 className="text-2xl font-bold mb-6 text-white flex items-center">
							<FaComments className="inline mr-2 text-purple-500" /> Chat with
							Coach Bernard
						</h2>
						<div className="bg-gray-800 p-6 rounded-lg mb-4 h-3/4 overflow-y-auto">
							{messages.map((message, index) => (
								<div
									key={index}
									className={`mb-4 flex ${
										message.sender === "user" ? "justify-end" : ""
									}`}
								>
									<span
										className={`p-3 rounded-lg ${
											message.sender === "user"
												? "bg-blue-600 text-white"
												: "bg-purple-600 text-white"
										}`}
									>
										{message.text}
									</span>
								</div>
							))}
						</div>

						{/* Message Input Area */}
						<div className="flex items-center">
							<input
								type="text"
								placeholder="Type a message..."
								className="flex-1 p-3 rounded-lg bg-gray-700 text-white"
							/>
							<button
								className="ml-4 p-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition"
								onClick={handleSendMessage}
							>
								<FaRegHeart className="inline mr-1 text-white" /> Send
							</button>
						</div>
					</div>
				) : (
					// Feature Details View
					selectedFeature && (
						<div className="bg-gray-800 p-6 rounded-lg h-full">
							<h2 className="text-2xl font-bold text-purple-500 mb-4">
								{selectedFeature}
							</h2>
							<div className="mb-6">
								<h3 className="text-lg font-semibold text-blue-400">
									Description:
								</h3>
								<p className="text-sm text-gray-300">
									{featureDetails[selectedFeature].description}
								</p>
							</div>
							<div className="mb-6">
								<h3 className="text-lg font-semibold text-blue-400">
									Discussion:
								</h3>
								<p className="text-sm text-gray-300">
									{featureDetails[selectedFeature].discussion}
								</p>
							</div>
							<div className="mb-6">
								<h3 className="text-lg font-semibold text-blue-400">Steps:</h3>
								<ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
									{featureDetails[selectedFeature].steps.map((step, idx) => (
										<li key={idx}>{step}</li>
									))}
								</ul>
							</div>
							<div>
								<h3 className="text-lg font-semibold text-blue-400">
									Recommendation:
								</h3>
								<p className="text-sm text-gray-300">
									{featureDetails[selectedFeature].recommendation}
								</p>
							</div>
						</div>
					)
				)}
			</div>
		</div>
	);
};

export default Messenger;
