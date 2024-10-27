import { useState } from "react";
import { useLocation } from "react-router-dom";
import IconLink from "./IconLink";
import homeIcon from "../assets/home.svg";
import scanIcon from "../assets/scan.png";
import analysis from "../assets/data-analysis.png";
import results from "../assets/results.png";
import more from "../assets/more.png";
import messenger from "../assets/messenger.png";

const FloatingButtons = () => {
	const location = useLocation();
	const currentPath = location.pathname;
	const [activeLabel, setActiveLabel] = useState("");
	const [clickedLabel, setClickedLabel] = useState("");

	const getButtonClass = (path) => {
		return currentPath === path
			? "flex items-center justify-center p-2 bg-blue-600 rounded-full transition relative group"
			: "flex items-center justify-center p-2 bg-purple-500 rounded-full transition relative group";
	};

	const handleMouseEnter = (label) => {
		setActiveLabel(label);
	};

	const handleMouseLeave = () => {
		setActiveLabel("");
	};

	const handleClick = (label) => {
		setClickedLabel(label);
	};

	return (
		<div className="fixed left-1/2 bottom-4 transform -translate-x-1/2 z-10">
			<div className="flex justify-center items-center p-2 rounded-full border-2 border-white bg-black bg-opacity-50 shadow-lg">
				<nav className="flex space-x-4">
					<IconLink
						to="/"
						icon={homeIcon}
						label="Home"
						activeLabel={activeLabel}
						clickedLabel={clickedLabel}
						handleMouseEnter={handleMouseEnter}
						handleMouseLeave={handleMouseLeave}
						handleClick={handleClick}
						getButtonClass={getButtonClass}
					/>
					<IconLink
						to="/scan"
						icon={scanIcon}
						label="Scan"
						activeLabel={activeLabel}
						clickedLabel={clickedLabel}
						handleMouseEnter={handleMouseEnter}
						handleMouseLeave={handleMouseLeave}
						handleClick={handleClick}
						getButtonClass={getButtonClass}
					/>
					<IconLink
						to="/reveal-results-demo"
						icon={results}
						label="Results"
						activeLabel={activeLabel}
						clickedLabel={clickedLabel}
						handleMouseEnter={handleMouseEnter}
						handleMouseLeave={handleMouseLeave}
						handleClick={handleClick}
						getButtonClass={getButtonClass}
					/>
					<IconLink
						to="/analysis"
						icon={analysis}
						label="Analysis"
						activeLabel={activeLabel}
						clickedLabel={clickedLabel}
						handleMouseEnter={handleMouseEnter}
						handleMouseLeave={handleMouseLeave}
						handleClick={handleClick}
						getButtonClass={getButtonClass}
					/>
					<IconLink
						to="/messenger"
						icon={messenger}
						label="Messenger"
						activeLabel={activeLabel}
						clickedLabel={clickedLabel}
						handleMouseEnter={handleMouseEnter}
						handleMouseLeave={handleMouseLeave}
						handleClick={handleClick}
						getButtonClass={getButtonClass}
					/>
					<IconLink
						to="/more"
						icon={more}
						label="More"
						activeLabel={activeLabel}
						clickedLabel={clickedLabel}
						handleMouseEnter={handleMouseEnter}
						handleMouseLeave={handleMouseLeave}
						handleClick={handleClick}
						getButtonClass={getButtonClass}
					/>
				</nav>
			</div>
		</div>
	);
};

export default FloatingButtons;
