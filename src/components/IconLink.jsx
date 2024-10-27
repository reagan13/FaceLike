import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const IconLink = ({
	to,
	icon,
	label,
	activeLabel,
	clickedLabel,
	handleMouseEnter,
	handleMouseLeave,
	handleClick,
	getButtonClass,
}) => {
	return (
		<Link
			to={to}
			className={getButtonClass(to)}
			onMouseEnter={() => handleMouseEnter(label)}
			onMouseLeave={handleMouseLeave}
			onClick={() => handleClick(label)}
		>
			<div className="absolute inset-0 rounded-full border-2 border-white transform scale-110 group-hover:scale-125 transition"></div>
			<img
				src={icon}
				alt={label}
				className="h-6 w-6 text-white filter invert relative z-10"
			/>
			{(activeLabel === label || clickedLabel === label) && (
				<div className="absolute bottom-full mb-2 text-center text-white text-sm">
					{label}
				</div>
			)}
		</Link>
	);
};

IconLink.propTypes = {
	to: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	activeLabel: PropTypes.string.isRequired,
	clickedLabel: PropTypes.string.isRequired,
	handleMouseEnter: PropTypes.func.isRequired,
	handleMouseLeave: PropTypes.func.isRequired,
	handleClick: PropTypes.func.isRequired,
	getButtonClass: PropTypes.func.isRequired,
};

export default IconLink;
