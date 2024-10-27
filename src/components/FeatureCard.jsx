import PropTypes from "prop-types";

const FeatureCard = ({ icon, feature, value }) => {
	return (
		<div className="flex items-center bg-gray-700 rounded-md shadow-md p-4">
			{/* Icon */}
			<div className="text-2xl mr-3">{icon}</div>
			{/* Feature Details */}
			<div className="flex flex-col">
				<p className="font-semibold">{feature}</p>
				<p className="text-gray-300">{value}</p>
			</div>
		</div>
	);
};
FeatureCard.propTypes = {
	icon: PropTypes.node.isRequired,
	feature: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
};

export default FeatureCard;
